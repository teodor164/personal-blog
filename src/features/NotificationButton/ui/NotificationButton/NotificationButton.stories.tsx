import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { NotificationSchema } from '@/entities/Notification';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
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
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: items,
                delay: 500,
            },
        ],
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1', username: 'Maxim', avatar: '', roles: [UserRole.ADMIN],
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1', username: 'Maxim', avatar: '', roles: [UserRole.ADMIN],
        },
    },
}), ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
};
Green.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1', username: 'Maxim', avatar: '', roles: [UserRole.ADMIN],
        },
    },
}), ThemeDecorator(Theme.GREEN)];
