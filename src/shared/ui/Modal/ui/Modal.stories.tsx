import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos inventore iste laboriosam minus molestiae omnis placeat ratione reiciendis sunt veritatis. Aperiam consequuntur doloremque error hic ipsum natus quod quos sunt totam vel! Aliquid autem deleniti eaque esse ex excepturi id nemo, nobis possimus quis quo sint veniam. Accusamus aperiam asperiores assumenda autem dignissimos doloremque ducimus ea earum eligendi esse fugiat laborum mollitia nam officiis, perferendis quibusdam quo reiciendis rerum sapiente sequi suscipit tempora tenetur voluptate. Aspernatur aut autem dolore exercitationem, explicabo fugit iste iure, maxime necessitatibus nobis quidem repellat repellendus sint. Aspernatur dicta dolores ducimus eligendi necessitatibus nisi pariatur tempore!\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos inventore iste laboriosam minus molestiae omnis placeat ratione reiciendis sunt veritatis. Aperiam consequuntur doloremque error hic ipsum natus quod quos sunt totam vel! Aliquid autem deleniti eaque esse ex excepturi id nemo, nobis possimus quis quo sint veniam. Accusamus aperiam asperiores assumenda autem dignissimos doloremque ducimus ea earum eligendi esse fugiat laborum mollitia nam officiis, perferendis quibusdam quo reiciendis rerum sapiente sequi suscipit tempora tenetur voluptate. Aspernatur aut autem dolore exercitationem, explicabo fugit iste iure, maxime necessitatibus nobis quidem repellat repellendus sint. Aspernatur dicta dolores ducimus eligendi necessitatibus nisi pariatur tempore!\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
