## Project starting 

```
npm install - packages installing
npm run start:dev or npm run start:dev:vite - starting dev server, frontend + backend, by using webpack or vite
```

----

## Scripts 
- `npm run start` - starting frontend dev server on webpack
- `npm run start:vite` - starting frontend dev server on vite 
- `npm run start:dev` - starting frontend dev server on webpack + backend 
- `npm run start:dev:vite` - starting frontend dev server on vite + backend 
- `npm run start:dev:server` - starting backend server
- `npm run build:prod` - building project in prod config
- `npm run build:dev` - building project in dev config (not minified)
- `npm run lint:ts` - linting ts,tsx files
- `npm run lint:ts:fix` - fix code style for ts,tsx files
- `npm run lint:scss` - linting scss files
- `npm run lint:scss:fix` - fix code style for scss files
- `npm run test:unit` - star unit testing with jest
- `npm run test:ui` - star screenshot testing with loki
- `npm run test:ui:ok` - approving new screenshots from loki
- `npm run test:ui:ci` - star screenshot testing with loki in ci
- `npm run test:ui:report` - generating full report for screenshot tests
- `npm run test:ui:json` - generating json report for screenshot tests
- `npm run test:ui:html` - generating html report for screenshot tests
- `npm run storybook` - start storybook
- `npm run storybook:build` - build storybook
- `npm run generate:slice` - generate slice template
----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Tests for components with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More information about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-ulbi-tv-plugin*,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers from the point of view of FSD
   (for example widgets cannot be used in features and entitites)
3) public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Launching linters
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/variant';

export default {
     title: 'shared/Button',
     component: Button,
     argTypes: {
         backgroundColor: { control: 'color' },
     },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
     children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
     children: 'Text',
     theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

----

## CI pipeline

The github actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in ci.


----

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flags

Allow the use of feature flags only using the toggleFeatures helper

an object with options is passed into it

{
name: name of the feature flag,
on: function that will work after the feature is enabled
of: function that will work after turning off the feature
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. Name of the feature flag to be removed
2. State (on\off)

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [AddCommentForm](/src/features/AddCommentForm)
- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
