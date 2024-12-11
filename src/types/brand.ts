import {Images} from "./images";

export interface Brand {
    name: string;
    image: string;
}
export interface DataBrandProps {
    idBrand:number;
    name: string;
    images: Images[]
}
