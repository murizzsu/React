
import { createContext, useContext, useReducer } from 'react'
const TotalPriceContext = createContext(null) // menyimpan state
const totalPriceDispatchContext = createContext(null) // menyimpan action
const totalPriceReducer = (state, action) => {
    switch(action.type){
        case "update":{
            return{
                total: action.payload.total
            }
        }default:{
            throw Error("Unknow action: " + action.type) 
        }
    }
}

export function TotalPriceProvider({children}){
    const [totalPrice, dispatch] = useReducer(
        totalPriceReducer, {total:0}
    )
    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <totalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </totalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    )

}

export function useTotalPrice(){
    return useContext(TotalPriceContext)
}

export function useTotalPriceDispatch(){
    return useContext(totalPriceDispatchContext)
}