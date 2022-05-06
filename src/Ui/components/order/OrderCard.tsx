import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../Application/store/Hooks';

export default function OrderCard(props : any){
    const order = useAppSelector(state => state.order.orders[props.index])
    const navigate = useNavigate()

    const orderStatusClassName = "order-status-" + order.State.toString().toLowerCase()
    
    function navigateToOrderDetails(){
        navigate(`/OrderDetails/${order.id}` , {replace:true})
    }
    
    return (
        <tr className="order-row">
        <td className="order-id">{order.id}</td>
        <td className="order-customer">{order.FullName}</td>
        <td className="order-date">18:35</td>
        <td className={orderStatusClassName + " fw-bold h5"}>{order.State}</td>
        <td className="order-price">{order.PhoneNumber}</td>
        <td className="order-actions"><Button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={()=>navigateToOrderDetails()}>Full details</Button></td>
        </tr>

    )
    
}