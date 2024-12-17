import {Brand} from "../Brand/Brand";
import {Brand as BrandType} from "../../../types";
import {useFilters} from "../../../hooks";
import {constructFilterURL} from "../../../script";
import {useEffect} from "react";
import {useConsultInventory} from "../../../hooks/useConsultInventory";

interface Props {
    data: BrandType[] | null
}


export const BrandList = ({data}: Props) => {

    const {changeUrl} = useConsultInventory();

    const {
        handlerFilterBrands,
        selectedTechnologies,
        selectedCategories,
        selectedApplications,
        selectedBrands
    } = useFilters();

    const searchBrand = (value: string, isPressed: boolean) => {
        handlerFilterBrands(value, isPressed);
    }
    const newUrl = constructFilterURL(selectedTechnologies, selectedCategories, selectedApplications, selectedBrands);

    //searching
    useEffect(() => {
        changeUrl(newUrl);
    }, [newUrl, changeUrl]);


    return (
        <div className="brandChooser">
            {data?.map((item) => (
                <Brand key={item.name} brand={item} parentMethod={searchBrand}/>
            ))}
        </div>
    )
}