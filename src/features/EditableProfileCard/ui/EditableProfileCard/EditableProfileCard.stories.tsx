import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const NormalDeprecated = Template.bind({});
NormalDeprecated.decorators = [StoreDecorator({})];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator];

export const BlackDeprecated = Template.bind({});
BlackDeprecated.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const BlackRedesigned = Template.bind({});
BlackRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const GreenDeprecated = Template.bind({});
GreenDeprecated.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];

export const GreenRedesigned = Template.bind({});
GreenRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator, ThemeDecorator(Theme.GREEN)];
