import './FiltersContainer.css'
import {Filter} from "../index";
import {useFetch} from "../../hooks";
import {Application, Category, Technology} from "../../types";

const url = "http://localhost:8080/api/";
const filtersType = ['cat', 'tech', 'app-type']


export const FiltersContainer = () => {

    const {data} = useFetch<Category[]>(`${url + filtersType[0]}/`);
    const {data: dataTech,} = useFetch<Technology[]>(`${url + filtersType[1]}/`);
    const {data: dataApp,} = useFetch<Application[]>(`${url + filtersType[2]}/`);

    console.log(data);


    return (
        <div>
            <Filter type="Categoría" data={data}/>
            <Filter type="Tecnología" data={dataTech}/>
            <Filter type="Applicativo" data={dataApp}/>
        </div>
    )
}