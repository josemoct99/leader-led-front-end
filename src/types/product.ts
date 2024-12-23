import {Brand, Images,Technology,ColorProps,Application,Category} from "./index";

export interface Product {
    idInventory: number;
    idBrand: Brand ;
    marketName: string;
    desc: string;
    imageList: Images[]
    quantity: number | 1;
    categorySetInventory: Category[];
    technologySetInventory: Technology[];
    colorsSetInventory: ColorProps[];
    applicationTypeSetInventory: Application[];
}