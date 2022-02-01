import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import OrderCard from '../../components/order/OrderCard'

import {add, remove} from '../../store/reducers/OrdersReducer'
import { OrderStatus } from "../../models/orders/Order";

let dummyIndex = -1

export default function OrdersBoard() {
    const orders  = useAppSelector(state => state.order.orders)
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
                latitude:2,
                longitude:3,
                addresse : 'bba',
            }
        }

       dispatch(add(dummyOrder))
    }

    function deleteOrder(key : number){
       dispatch(remove(key))
    }

    return (
        <div className="OrdersList">
            <p>OrdersList</p>

            <button onClick={() =>{addOrder()}} >Add</button>

            <button onClick={()=>{deleteOrder(0)}}>Remove</button>

            {orders.map((element ,key) =>{ 
                return <OrderCard key={element.id} index={key} ></OrderCard>
            })}

        </div>    
    )
    
}
