import { createSlice } from "@reduxjs/toolkit";
import { Order, OrderStatus } from "../../../data/orders/Order";



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
        update(state , action : {payload:{orderId:string ,orderState:OrderStatus}}){
            state.orders[action.payload.orderId].state = action.payload.orderState
        },
        remove(state , action : {payload:string}){
            delete state.orders[action.payload]

        },
        add(state , action : {payload : Order}){
            state.orders[action.payload.id] = action.payload
        },
       
    }
} )

export const {update,remove,add} = ordersSlice.actions

export default ordersSlice.reducer
