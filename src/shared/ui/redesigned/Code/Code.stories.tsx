import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
    text: 'import React from \'react\';\n'
        + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
        + 'import { ThemeDecorator } from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\';\n'
        + 'import { Theme } from \'app/providers/ThemeProvider\';\n'
        + '\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'entities/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;',
};

export const Dark = Template.bind({});
Dark.args = {
    text: 'import React from \'react\';\n'
        + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
        + 'import { ThemeDecorator } from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\';\n'
        + 'import { Theme } from \'app/providers/ThemeProvider\';\n'
        + '\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'entities/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
