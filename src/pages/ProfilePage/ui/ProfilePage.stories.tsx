import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: {}) => <ProfilePage {...args} />;

const profile = {
    form: {
        age: 24,
        country: Country.Moldova,
        lastname: 'Rogozneac',
        first: 'Maxim',
        currency: Currency.RON,
        username: 'admin',
        // avatar,
        city: 'Chisianu',
    },
};

export const LightDeprecated = Template.bind({});
LightDeprecated.args = {};
LightDeprecated.decorators = [StoreDecorator({ profile })];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [StoreDecorator({ profile }), NewDesignDecorator];

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile })];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile }), NewDesignDecorator];

export const GreenDeprecated = Template.bind({});
GreenDeprecated.args = {};
GreenDeprecated.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({ profile })];

export const GreenRedesigned = Template.bind({});
GreenRedesigned.args = {};
GreenRedesigned.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({ profile }), NewDesignDecorator];
