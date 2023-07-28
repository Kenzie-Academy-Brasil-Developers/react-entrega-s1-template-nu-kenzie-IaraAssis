import {Header} from "../Header"
import { SectionValue } from "../valueTotal/SectionValue"


export const DefautTemplate = ({children}) =>{
    return(
        <>
        <Header/>
        <main>
            {children}
        
        </main>
        </>
    )
}