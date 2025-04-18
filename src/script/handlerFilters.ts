import {INVENTORY_SEARCH_URL} from "../utils/api";

let baseUrl = INVENTORY_SEARCH_URL;

export const constructFilterURL = (
    technologies: string[],
    categories: string[],
    applications: string[],
    brands: string[],
): string => {
    const newUrl = new URL(baseUrl);
    technologies.forEach(item => newUrl.searchParams.append("technologies", item));
    categories.forEach(item => newUrl.searchParams.append("categories", item));
    applications.forEach(item => newUrl.searchParams.append("applications", item));
    brands.forEach(item => newUrl.searchParams.append("brands", item));

    if (technologies.length === 0 && categories.length === 0 && applications.length === 0 && brands.length === 0) return baseUrl;

    return newUrl.toString();
};
