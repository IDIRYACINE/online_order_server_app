
import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../models/orders/Order";

interface OrdersState{
    orders : Array<Order>,
}

const initialState : OrdersState = {
    orders : [],
}

const ordersSlice = createSlice({
    name : 'orders',
    initialState,
    reducers : {
        update(state , action){
            
        },
        remove(state , action : {payload:number}){
            state.orders.splice(action.payload,1)
            
        },
        add(state , action : {payload : Order}){
            state.orders.push(action.payload)
        },
        loadOrders(state , action:{payload :any}){
            state.orders = action.payload
        }
    }
} )

export const {update,remove,add,loadOrders} = ordersSlice.actions

export default ordersSlice.reducer
