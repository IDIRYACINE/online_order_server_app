import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../models/orders/Order";

type OrderStatus = Order & {loaded:Boolean}

type RegisterExtrasAction = {
    payload : {
        id : string
        extras : {
        address : string,
        rating : string,
        negativeRating : string}
    }
}

type OrdersState = {
    orders : Record<string,OrderStatus>
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
        add(state , action : {payload : OrderStatus}){
            state.orders[action.payload.id] = action.payload
        },
        registerExtras(state , action:RegisterExtrasAction ){
            const oldOrder = state.orders[action.payload.id]
            state.orders[action.payload.id] = {...oldOrder,...action.payload.extras}
        },
        loadOrders(state , action:{payload :any}){
            state.orders = action.payload
        }
    }
} )

export const {update,remove,add,loadOrders,registerExtras} = ordersSlice.actions

export default ordersSlice.reducer
