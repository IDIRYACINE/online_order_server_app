import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { getCustomerExtras } from '../../api/OrdersApi';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { registerExtras } from '../../store/reducers/OrdersReducer';
import './OrderCard.css'

export default function OrderCard(props : any){
    const order = useAppSelector(state => state.order[props.index])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function navigateToOrderDetails(){
        if(!order.loaded){
            getCustomerExtras(
                order.id,
                {
                    onSuccess:(response)=>{
                        dispatch(registerExtras({
                            id : order.id,
                            extras : {...response.data , loaded:true}
                        }))
                        navigate(`/OrderDetails/${order.id}` , {replace:true})
                    },
                    onFail : ()=>{}
                }
            )
        }
        else{
            navigate(`/OrderDetails/${order.id}` , {replace:true})
        }
    }
    
    return (
       <Card className="py-2 px-2">
           <Card.Header>Order#{order.id}</Card.Header>
           <Card.Body>
               <Card.Text>Customer Name : {order.customerName}</Card.Text>
               <Card.Text>PhoneNumber : {order.phoneNumber}</Card.Text>
               <Button variant="primary" onClick={()=>{navigateToOrderDetails()}}>Full Details</Button>
               <Card.Footer className="text-muted">Sent At : 12:35 </Card.Footer>
           </Card.Body>
       </Card>
    )
    
}