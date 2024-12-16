import './Filter.css'
import {Application, Category, Technology} from "../../types";

interface Props {
    type: string,
    data: Category[] | Technology[] | Application[] | null,
}


export const Filter = ({ type, data }: Props) => {
    return (
        <div className="filter">
            <h3 className="filter-title">{type}</h3>
            <div className="filter-items">
                {data?.map(item => (
                    <div key={item.name} className="filter-item">
                        <label htmlFor={item.name} className="filter-label">
                            <input
                                type="checkbox"
                                id={item.name}
                                name={item.name}
                                className="filter-checkbox"
                            />
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
