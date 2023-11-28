import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Select',
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
