import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import OrderCard from '../../components/order/OrderCard'

import {add, remove} from '../../store/reducers/OrdersReducer'
import { OrderStatus } from "../../models/orders/Order";

let dummyIndex = -1

export default function OrdersBoard() {
    const orders  = useAppSelector(state => state.order)
    const dispatch = useAppDispatch()
    
    function addOrder(){
        dummyIndex++
        let dummyOrder = {
            id : "f21",
            state : OrderStatus.Pending,
            items : [],
            phoneNumber : "052222",
            email : "idir@gmail",
            banStatus : "Normal",
            customerName : 'idir',
            coordinations : {
                lat:2,
                lng:3,
            },
            address : 'bba',
            loaded:false
        }

       dispatch(add(dummyOrder))
    }

    function deleteOrder(key : string){
       dispatch(remove(key))
    }

    return (
        <div className="OrdersList">
            <p>OrdersList</p>

            <button onClick={() =>{addOrder()}} >Add</button>

            <button onClick={()=>{deleteOrder("f21")}}>Remove</button>

            {Object.entries(orders).map(([key,value])=>{
                return <OrderCard key={value.id} index={key} ></OrderCard>
            })}

        </div>    
    )
    
}
