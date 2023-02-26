import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum cumque distinctio eum harum natus perspiciatis quasi quisquam sed unde! Cupiditate dolore dolorem in molestias optio quam repellat ullam voluptatibus.'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum cumque distinctio eum harum natus perspiciatis quasi quisquam sed unde! Cupiditate dolore dolorem in molestias optio quam repellat ullam voluptatibus.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
