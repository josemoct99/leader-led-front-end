import type {Meta,StoryObj} from "@storybook/react";
import {Brand} from './Brand'

const meta: Meta<typeof Brand> = {
    component: Brand,
    title: 'Brand',

}
export default meta;

type Story = StoryObj<typeof Brand>;

export const Base: Story = {
    args: {
        name: "Samsung",
        image: "/images/brands/samsung.svg",
    }
}