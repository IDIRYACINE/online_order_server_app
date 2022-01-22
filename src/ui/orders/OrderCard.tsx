import React,{useState} from 'react';
import { useAppSelector } from '../../redux/Hooks';


export default function OrderCard(props : any){
    const order = useAppSelector(state => state.order.getOrder(props.index))

    return (
        <div className ='OrderCard'>
            <p>orderId : {order.id}</p>
            <p>customerName : {order.customerName}</p>
        </div>
    )
    
}