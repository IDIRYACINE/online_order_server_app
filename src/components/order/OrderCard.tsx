import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'controllers/store/Hooks';
import styles from '../../styles/order/OrdersBoard.module.scss'

export default function OrderCard(props : any){
    const order = useAppSelector(state => state.order.orders[props.index])
    const navigate = useNavigate()

    const orderStatusClassName = "order-status-" + order.state.toString().toLowerCase()
    
    function navigateToOrderDetails(){
        navigate(`/OrderDetails/${order.id}` , {replace:true})
    }
    
    return (
        <tr className="order-row">
        <td className="order-id">{order.id}</td>
        <td className="order-customer">{order.fullName}</td>
        <td className="order-date">{order.time}</td>
        <td className={styles[orderStatusClassName] + " fw-bold h5"}>{order.state}</td>
        <td className="order-price">{order.phoneNumber}</td>
        <td className="order-actions"><Button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={()=>navigateToOrderDetails()}>Full details</Button></td>
        </tr>

    )
    
}