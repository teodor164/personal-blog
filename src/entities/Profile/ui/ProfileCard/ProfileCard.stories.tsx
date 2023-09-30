import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    data: {
        age: 24,
        country: Country.Moldova,
        lastname: 'Rogozneac',
        first: 'Maxim',
        currency: Currency.RON,
        username: 'admin',
        avatar,
        city: 'Chisianu',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        age: 24,
        country: Country.Moldova,
        lastname: 'Rogozneac',
        first: 'Maxim',
        currency: Currency.RON,
        username: 'admin',
        avatar,
        city: 'Chisianu',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
