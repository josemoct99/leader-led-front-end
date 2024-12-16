import './BrandChooser.css'
import {useFetch,useFilters} from "../../../hooks";
import {Brand as BrandType} from "../../../types";
import {Brand} from "../index";
import {useEffect} from "react";
import {constructFilterURL} from "../../../script";

const url = "http://localhost:8080/api/brand/";

interface Param {
    parentMethod: (searchParam: string) => void;
    urlSearch: string
}


export const BrandChooser = ({parentMethod, urlSearch}: Param) => {
    const {data, error, loading} = useFetch<Array<BrandType>>(url);
    const {
        handlerFilterBrands,
        selectedTechnologies,
        selectedCategories,
        selectedApplications,
        selectedBrands
    } = useFilters();
    const newUrl = constructFilterURL(urlSearch, selectedTechnologies, selectedCategories, selectedApplications, selectedBrands);

    const searchBrand = (value: string, isPressed: boolean) => {
        handlerFilterBrands(value, isPressed);
    }

    useEffect(() => {
        parentMethod(newUrl);

    }, [selectedCategories, selectedTechnologies, selectedApplications, parentMethod, urlSearch, newUrl, selectedBrands]);


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div className="containerBrandChooser">
                <div className="brandChooser">
                    {data?.map((item) => (
                        <Brand key={item.name} brand={item} parentMethod={searchBrand}/>
                    ))}
                </div>
            </div>

        </>
    )
}



