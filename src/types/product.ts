import {Brand, Images} from "./index";
import {Category} from "./category";

export interface Product {
    idInventory: number;
    idBrand: Brand | null;
    marketName: string;
    desc: string;
    images: Images[] | null
    quantity: number;
    category: Category |null;
}