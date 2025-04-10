import './FiltersContainer.css'
import {Filter} from "../index";
import {useFetch, useFilters} from "../../hooks";
import {Application, Category, Technology} from "../../types";
import {FilterItems} from "../FilterItems/FilterItems";
import {useEffect} from "react";
import {constructFilterURL} from "../../script";
import {useConsultInventory} from "../../hooks/useConsultInventory";
import {BASE_API_URL,FILTER_TYPES} from "../../utils/api";

const url = BASE_API_URL;
const filtersType = FILTER_TYPES;


export const FiltersContainer = () => {

    const {data} = useFetch<Category[]>(`${url + filtersType[0]}/`);
    const {data: dataTech,} = useFetch<Technology[]>(`${url + filtersType[1]}/`);
    const {data: dataApp,} = useFetch<Application[]>(`${url + filtersType[2]}/`);
    //
    const {changeUrl} = useConsultInventory();


    const {
        selectedTechnologies,
        selectedCategories,
        selectedApplications,
        handleFilterChange,
        selectedBrands
    } = useFilters();
    const newUrl = constructFilterURL(selectedTechnologies, selectedCategories, selectedApplications, selectedBrands);


    useEffect(() => {
        changeUrl(newUrl);
    }, [newUrl, changeUrl]);


    return (
        <div className="filters-container">
            <Filter type="Categoría">
                {data?.map(item => (
                    <FilterItems key={item.name}
                                 item={item}
                                 filterType={'categories'}
                                 onFilterChange={handleFilterChange}
                    />
                ))}
            </Filter>
            <Filter type="Tecnología">
                {dataTech?.map(item => (
                    <FilterItems key={item.name}
                                 item={item}
                                 filterType={'technologies'}
                                 onFilterChange={handleFilterChange}
                    />
                ))}
            </Filter>
            <Filter type="Applicativo">
                {dataApp?.map(item => (
                    <FilterItems key={item.name}
                                 item={item}
                                 filterType={'applications'}
                                 onFilterChange={handleFilterChange}
                    />
                ))}
            </Filter>
        </div>
    )
}