import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import { Theme } from '@/shared/const/theme';

const items: NotificationSchema[] = [
    {
        id: '1',
        title: 'notification 1',
        description: "You've got a notification 1",
        href: '/',
    },
    {
        id: '2',
        title: 'notification 2',
        description: "You've got a notification 2",
    },
    {
        id: '3',
        title: 'notification 3',
        description: "You've got a notification 3",
    },
    {
        id: '4',
        title: 'notification 4',
        description: "You've got a notification 4",
    },
];

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: items,
            },
        ],
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
