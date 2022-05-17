import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'controllers/store/Hooks';
import styles from '../../styles/order/OrdersBoard.module.scss'
import OrderStatusButton from './OrderStatusButton';

export default function OrderCard(props : any){
    const order = useAppSelector(state => state.order.orders[props.index])
    const navigate = useNavigate()
    
    function navigateToOrderDetails(){
        navigate(`/OrderDetails/${order.id}` , {replace:true})
    }
    const modalStyle = {
        content: {
            top: '40%',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
          height: "20%",
          width : "40%"
        }}
        
    return (
        <tr className="order-row">
        <td className="order-id">{order.id}</td>
        <td className="order-customer">{order.customerName}</td>
        <td className="order-date">{order.time}</td>

        <td className=" fw-bold h5">{<OrderStatusButton orderState={order.state} orderId={order.id} 
        modalStyle ={modalStyle} />} </td>
        <td className="order-price">{order.phoneNumber}</td>
        <td className="order-actions"><Button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={()=>navigateToOrderDetails()}>Full details</Button></td>
        </tr>

    )
    
}

