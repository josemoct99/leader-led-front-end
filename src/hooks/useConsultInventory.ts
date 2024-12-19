import {ConsultInventoryContext, ConsultInventoryType} from "../context";
import {useContext} from "react";


export const useConsultInventory = ():ConsultInventoryType => {
    const context = useContext(ConsultInventoryContext);
    if (!context) {
        throw new Error("UseConsultInventory must be used within a ConsultInventoryProvider");
    }
    return context;
}