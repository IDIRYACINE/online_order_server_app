import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../../data/orders/Order";



type OrdersState = {
    orders : Record<string,Order>
}

const initialState : OrdersState = {
    orders : {}
}

const ordersSlice = createSlice({
    name : 'orders',
    initialState,
    reducers : {
        update(state , action){
            
        },
        remove(state , action : {payload:string}){
            delete state.orders[action.payload]
            
        },
        add(state , action : {payload : Order}){
            state.orders[action.payload.id] = action.payload
        },
       
        loadOrders(state , action:{payload :any}){
            state.orders = action.payload
        }
    }
} )

export const {update,remove,add,loadOrders} = ordersSlice.actions

export default ordersSlice.reducer
