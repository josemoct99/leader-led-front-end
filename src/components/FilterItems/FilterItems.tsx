import "./FilterItems.css"
import {Installation, Category, Technology} from "../../types";
import {ChangeEvent} from "react";


type ItemType = Category | Technology | Installation;

interface Props{
    item : ItemType;
    filterType : string;
    onFilterChange : (filterType : string,value:string,isChecked:boolean) => void;
}


export const FilterItems = ({item,filterType,onFilterChange}: Props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(filterType, item.name, e.target.checked);
    };


    return (
        <div key={item.name} className="filter-item">
            <label htmlFor={item.name} className="filter-label">
                <input
                    type="checkbox"
                    id={item.name}
                    name={item.name}
                    className="filter-checkbox"
                    onChange={handleChange}
                />
                {item.name}
            </label>
        </div>
    )
};