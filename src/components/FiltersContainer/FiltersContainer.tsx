import './FiltersContainer.css'
import {Filter} from "../index";
import {useFetch, useFilters} from "../../hooks";
import {Application, Category, Technology} from "../../types";
import {FilterItems} from "../FilterItems/FilterItems";
import {useEffect} from "react";
import {constructFilterURL} from "../../script";

const url = "http://localhost:8080/api/";
const filtersType = ['cat', 'tech', 'app-type']

interface Params {
    parentMethod: (search: string) => void;
    urlSearch: string;
}


export const FiltersContainer = ({parentMethod, urlSearch}: Params) => {

    const {data} = useFetch<Category[]>(`${url + filtersType[0]}/`);
    const {data: dataTech,} = useFetch<Technology[]>(`${url + filtersType[1]}/`);
    const {data: dataApp,} = useFetch<Application[]>(`${url + filtersType[2]}/`);

    const { selectedTechnologies, selectedCategories, selectedApplications, handleFilterChange } = useFilters();


    useEffect(() => {
        const newUrl = constructFilterURL(urlSearch, selectedTechnologies, selectedCategories, selectedApplications);
        parentMethod(newUrl);
    }, [selectedCategories, selectedTechnologies, selectedApplications]);


    return (
        <div>
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