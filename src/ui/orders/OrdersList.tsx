import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import OrderCard from './OrderCard'

import {add, remove} from '../../redux/reducers/OrdersReducer'
import { OrderStatus } from "../../models/orders/Order";

let dummyIndex = -1

export default function OrdersList() {
    const orders  = useAppSelector(state => state.order.orders)
    const dispatch = useAppDispatch()
    
    function addOrder(){
        dummyIndex++
        let dummyOrder = {
            id : dummyIndex.toString(),
            state : OrderStatus.Pending,
            items : [],
            customerName : 'idir',
            address : 'bba',
            coordinations : {
                latitude:2,
                longitude:3
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
