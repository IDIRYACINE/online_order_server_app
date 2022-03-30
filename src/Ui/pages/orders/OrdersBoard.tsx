import React from "react";
import { useAppDispatch, useAppSelector } from "../../../Application/store/Hooks";
import OrderCard from '../../components/order/OrderCard'

import {add, remove} from '../../../Application/store/reducers/OrdersReducer'
import { OrderStatus } from "../../../Domain/orders/Order";

let dummyIndex = -1

export default function OrdersBoard() {
    const orders  = useAppSelector(state => state.order.orders)
    const dispatch = useAppDispatch()
    
    function addOrder(){
        dummyIndex++
        let dummyOrder = {
            id : "f21",
            State : OrderStatus.Pending,
            items : [],
            PhoneNumber : "052222",
            Email : "idir@gmail",
            BanStatus : "Normal",
            FullName : 'idir',
            Latitude:2,
            Longitude:3,
            Address : 'bba',
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
                return <OrderCard key={'#'+value.id} index={key} ></OrderCard>
            })}

        </div>    
    )
    
}
