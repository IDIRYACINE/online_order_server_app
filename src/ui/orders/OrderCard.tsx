import React,{useState} from 'react';
import Order from '../../models/orders/Order'


export default function OrderCard(props : any){
    const [order , setOrder] = useState(new Order(props.data))

    return (
        <div className ='OrderCard'>
            <p>orderId : {order.orderId}</p>
            <p>customerName : {order.customerName}</p>
        </div>
    )
    
}