import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageFiltersDeprecated } from './ArticlePageFiltersDeprecated';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticlePageFilters',
    component: ArticlePageFiltersDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFiltersDeprecated>;

const Template: ComponentStory<typeof ArticlePageFiltersDeprecated> = (args) => <ArticlePageFiltersDeprecated {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
