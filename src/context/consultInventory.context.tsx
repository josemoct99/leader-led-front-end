import {createContext, ReactNode, useState} from "react";

const baseUrl = "http://localhost:8080/api/inventory/search"; // This is default url


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