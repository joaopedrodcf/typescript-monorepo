// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '../src';

export default {
    title: 'Components/Header',
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Header',
    links: [
        {
            href: '/about',
            name: 'about',
        },
        {
            href: '/contacts',
            name: 'contacts',
        },
    ],
};
