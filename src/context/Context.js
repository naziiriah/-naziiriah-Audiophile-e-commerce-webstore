
import { createContext,} from "react";
import { Data } from "../Data/data";

export const GearContext = createContext()

export const GearProvider = (props) => {
    const Items = Data
// imports the large data accesible to its children elements
    const purchase= []
    const Total = []
    
    return(
        <GearContext.Provider value = {[Items, purchase, Total]}>
            {props.children}
        </GearContext.Provider>
    )
}