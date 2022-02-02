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

type OrdersState = Record<string,OrderStatus>

const initialState : OrdersState = {}

const ordersSlice = createSlice({
    name : 'orders',
    initialState,
    reducers : {
        update(state , action){
            
        },
        remove(state , action : {payload:string}){
            delete state[action.payload]
            
        },
        add(state , action : {payload : OrderStatus}){
            state[action.payload.id] = action.payload
        },
        registerExtras(state , action:RegisterExtrasAction ){
            const oldOrder = state[action.payload.id]
            state[action.payload.id] = {...oldOrder,...action.payload.extras}
        },
        loadOrders(state , action:{payload :any}){
            state = action.payload
        }
    }
} )

export const {update,remove,add,loadOrders,registerExtras} = ordersSlice.actions

export default ordersSlice.reducer
