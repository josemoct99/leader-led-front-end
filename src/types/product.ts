import {Brand, Images,Technology,ColorProps,Installation,Category} from "./index";
import {Status} from "./Status";

export interface Product {
    idInventory: number;
    idBrand: Brand ;
    reference: string;
    marketName: string;
    power: number;
    lumens: number;
    desc: string;
    idStatus:Status;
    imageList: Images[]
    quantity: number | 1;
    categoriesSetInventory: Category[];
    technologiesSetInventory: Technology[];
    colorsSetInventory: ColorProps[];
    installationTypeSetInventory: Installation[];
}

export interface ProductCardJson {
    idInventory: 1,
    marketName: string,
    desc: string,
    mainImageUrl: string|null,
    primaryTechnology: string,
    primaryInstallation: string,
    primaryCategory: string
}