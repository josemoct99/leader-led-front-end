import type {Meta, StoryObj} from "@storybook/react";
import {Brand} from './Brand'
import {Images} from "../../../types";

const meta: Meta<typeof Brand> = {
    component: Brand,
    title: 'Brand',

}
export default meta;

type Story = StoryObj<typeof Brand>;

const images: Images[] = [
    {
        idImageBrand: 1,
        url: "/images/brands/"+"samsung",
        typeSet: [
            {
                idType: 1,
                type: "svg"
            }
        ]
    }]


export const Base: Story = {
    args: {
        name: "Samsung",
        images: images,
    }
}