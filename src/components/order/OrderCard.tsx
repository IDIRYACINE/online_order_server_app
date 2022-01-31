import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store/Hooks';
import './OrderCard.css'

export default function OrderCard(props : any){
    const order = useAppSelector(state => state.order.orders[props.index])
    const navigate = useNavigate()

    function navigateToOrderDetails(){
        navigate("/OrderDetails" , {replace:true})
    }
    
    return (
       <Card className="py-2 px-2">
           <Card.Header>Order#{order.id}</Card.Header>
           <Card.Body>
               <Card.Text>Customer Name : {order.customerName}</Card.Text>
               <Card.Text>Delivery Address : {order.address}</Card.Text>
               <Button variant="primary" onClick={()=>{navigateToOrderDetails()}}>Full Details</Button>
               <Card.Footer className="text-muted">Sent At : 12:35 </Card.Footer>
           </Card.Body>
       </Card>
    )
    
}