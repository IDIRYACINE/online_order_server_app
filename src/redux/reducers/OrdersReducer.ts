
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/orders/Order";


interface OrdersState{
    orders : Array<Order>,
    getOrder : (index :number)=>Order,
}

const initialState : OrdersState = {
    orders : [],
    getOrder(index : number ) { return this.orders[index]},
}

const ordersSlice = createSlice({
    name : 'orders',
    initialState,
    reducers : {
        update(state , action){
            
        },
        remove(state , action : {payload:{index:number}}){
            const index = action.payload.index
            state.orders.splice(index,1)
        },
        add(state , action : {payload : {order : Order}}){
            const order = action.payload.order
            state.orders.push(order)
        }
    }
} )

export const {update,remove,add} = ordersSlice.actions

export default ordersSlice.reducer
