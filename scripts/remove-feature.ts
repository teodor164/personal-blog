import {
    JsxAttribute, Node, Project, SyntaxKind,
} from 'ts-morph';

const removedFeatureName = process.argv[2]; // example: isArticleEnabled

const featureStateVariants = ['on', 'off'];
const featureState = process.argv[3]; // example off\on

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!removedFeatureName) {
    throw new Error("Insert feature flag's name");
}

if (!featureState) {
    throw new Error('Insert feature state (on/off)');
}

if (!featureStateVariants.includes(featureState)) {
    throw new Error('Feature state should be only on or off');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

function isToggleComponent(node: Node) {
    return node.getFirstDescendantByKind(SyntaxKind.Identifier)?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

    if (!objectOptions) return;

    const onFunctionProperty = objectOptions.getProperty('on');
    const offFunctionProperty = objectOptions.getProperty('off');

    const featureNameProperty = objectOptions.getProperty('name');

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== removedFeatureName) return;

    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
    }

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
    }
};

const getAttributeNodeByName = (
    jsxAttributes: JsxAttribute[],
    name: string,
) => jsxAttributes.find((node) => node.getName() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

const replaceComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== removedFeatureName) return;

    const offValue = getReplacedComponent(offAttribute);
    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            return replaceToggleFunction(node);
        }
        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            return replaceComponent(node);
        }

        return () => {};
    });
});

project.save();
