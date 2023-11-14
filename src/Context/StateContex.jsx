import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { reducer } from "./reducer";

export const StateContext = createContext();
// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({children})=>{
    const [productsList,setProductsList] = useState([]);
    const [search,setSearch] = useState('')
    useEffect(()=>{
        fetchData()
    },[])
    useEffect(()=>{
        disptch({type:"GET_PRODUCT",payload:productsList});
        const filterProduct = productsList.filter(item=>item.title.toLowerCase().includes(search));
        disptch({type:"GET_PRODUCT",payload:filterProduct})

    },[productsList,search])
   
    const fetchData = async ()=>{
        const api = await fetch(`https://fakestoreapi.com/products`);
        const data = await api.json();
        setProductsList(data)
        
    }
    const initialstate = [{
        products:[],
        cart:[]
    }];
 

    const [state,disptch] = useReducer(reducer,initialstate)

    const data = {state,disptch,search,setSearch}
   return(
    <StateContext.Provider value={data}>
    {children}
    </StateContext.Provider>
   )
}
export const StateContextCustom = ()=> useContext(StateContext)