import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const articleMock = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'admin',
        password: '123',
        role: 'ADMIN',
        avatar: 'data:image/jpeg;base64,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',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;
const articlesMock = new Array(16).fill(0).map((item, index) => ({
    ...articleMock,
    id: String(index),
}));

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: articlesMock,
            },
        ],
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const DARK = Template.bind({});
DARK.args = {};
DARK.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
