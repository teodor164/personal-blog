import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select',
    options: [
        { value: '123', content: 'First option' },
        { value: '1234', content: 'Second option' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Select',
    options: [
        { value: '123', content: 'First option' },
        { value: '1234', content: 'Second option' },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
