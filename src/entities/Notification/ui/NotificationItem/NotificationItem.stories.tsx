import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import { Theme } from '@/shared/const/theme';

const item: NotificationSchema = {
    id: '1',
    title: 'notification 1',
    description: "You've got a notification 1",
    href: '/',
};

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});
Light.args = {
    item,
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    item,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
