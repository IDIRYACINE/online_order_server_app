import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import OrderCard from './OrderCard'

import {add, remove} from '../../redux/reducers/OrdersReducer'


export default function OrdersList() {
    const orders = useAppSelector(state => state.order.orders)
    const dispatch = useAppDispatch()

    function addOrder(data : any){
       dispatch(add({order : data}))
    }

    function deleteOrder(index : number){
       dispatch(remove({index:index}))
    }

    return (
        <div className="OrdersList">
            <p>OrdersList</p>

            <button onClick={() =>{addOrder({id:"idir",customerName:"yacine"})}} >Add</button>

            <button onClick={()=>{deleteOrder(0)}}>Remove</button>

            {orders.map((element,index) =>{ 
                return <OrderCard index={index} ></OrderCard>
            })}

        </div>    
    )
    
}
