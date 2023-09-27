import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'Select',
    items: [
        { value: '123', content: 'First option' },
        { value: '1234', content: 'Second option' },
    ],
    onChange: () => {},
};
Light.decorators = [StoreDecorator({})];

export const TopLeft = Template.bind({});
TopLeft.args = {
    label: 'Select',
    items: [
        { value: '123', content: 'FirstOption' },
        { value: '1234', content: 'SecondOption' },
    ],
    onChange: () => {},
    direction: 'top left',
};
TopLeft.decorators = [StoreDecorator({})];

export const TopRight = Template.bind({});
TopRight.args = {
    label: 'Select',
    items: [
        { value: '123', content: 'FirstOption' },
        { value: '1234', content: 'SecondOption' },
    ],
    onChange: () => {},
    direction: 'top right',
};
TopRight.decorators = [StoreDecorator({})];

export const BottomRight = Template.bind({});
BottomRight.args = {
    label: 'Select',
    items: [
        { value: '123', content: 'FirstOption' },
        { value: '1234', content: 'SecondOption' },
    ],
    onChange: () => {},
    direction: 'bottom right',
};
BottomRight.decorators = [StoreDecorator({})];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    label: 'Select',
    items: [
        { value: '123', content: 'FirstOption' },
        { value: '1234', content: 'SecondOption' },
    ],
    onChange: () => {},
    direction: 'bottom left',
};
BottomLeft.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    label: 'Select',
    items: [
        { value: '123', content: 'First option' },
        { value: '1234', content: 'Second option' },
    ],
    onChange: () => {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
