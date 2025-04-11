import {createContext, ReactNode, useState} from "react";
import { INVENTORY_SEARCH_URL } from "../utils/api";

const baseUrl = INVENTORY_SEARCH_URL;

export interface ConsultInventoryType {
    url: string;
    changeUrl: (searchParams: string) => void;
}

export const ConsultInventoryContext = createContext<ConsultInventoryType | undefined>(undefined);


type ConsultParams = {
    children: ReactNode;
}


export const ConsultInventoryProvider = ({children}: ConsultParams) => {

    const [url, setUrl] = useState<string>(baseUrl);

    const changeUrl = (searchParams: string) => {
        if (url !== searchParams) {
            console.log(searchParams);
            console.log("BaseUrl:",baseUrl)
            setUrl(searchParams);
        }
    }

    return (
        <ConsultInventoryContext.Provider value={{
            url,
            changeUrl
        }}>
            {children}
        </ConsultInventoryContext.Provider>
    )
}