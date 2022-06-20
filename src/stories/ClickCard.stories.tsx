import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ClickCard from '../components/ClickCard';

export default {
  title: 'Example/ClickCard',
  component: ClickCard,
  argTypes: {
    padding: {
      options: [2, 4, 8],
      control: { type: 'radio' },
    },
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
    onClick: {
      action: 'handleClick',
    },
  },
} as ComponentMeta<typeof ClickCard>;

const Template: ComponentStory<typeof ClickCard> = (args) => <ClickCard {...args} />;

export const LargeClickCard = Template.bind({});
LargeClickCard.args = {
  padding: 8,
};

export const SmallClickCard = Template.bind({});
SmallClickCard.args = {
  padding: 2,
};
