import './Filter.css'
import {ReactNode} from "react";

interface Props {
    type: string,
    children: ReactNode,
}


export const Filter = ({ type,children  }: Props) => {
    return (
        <div className="filter">
            <h3 className="filter-title">{type}</h3>
            <div className="filter-items">
                {children}
            </div>
        </div>
    );
};
