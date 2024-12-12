import './Sidebar.css'
import {Link} from "react-router-dom";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    open: boolean;
}

export const SideBar = ({children, open}: Props) => {
    return (
        <div className={`sidebar ${open ? 'open' : 'closed'}`}>
            {children}

        </div>
    )
}