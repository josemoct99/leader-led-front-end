import type {Meta,StoryObj} from "@storybook/react";
import {BrandChooser} from "./BrandChooser";

const meta: Meta<typeof BrandChooser> = {
    component: BrandChooser,
    title: 'BrandChooser',

}
export default meta;

type Story = StoryObj<typeof BrandChooser>;

export const Base: Story = {
    args: {
    }
}
// should improve something here xd -- emmm is more difficult than i thought ---- later..