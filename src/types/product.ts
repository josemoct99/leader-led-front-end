import {Brand, Images,Technology,ColorProps,Application,Category} from "./index";

export interface Product {
    idInventory: number;
    idBrand: Brand ;
    marketName: string;
    desc: string;
    images: Images[]
    quantity: number;
    category: Category[];
    technology: Technology[];
    Color: ColorProps[];
    application: Application[];

}