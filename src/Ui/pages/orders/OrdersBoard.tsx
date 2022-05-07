import React from "react";
import { useAppDispatch, useAppSelector } from "../../../Application/store/Hooks";
import OrderCard from '../../components/order/OrderCard'

import {add, remove} from '../../../Application/store/reducers/OrdersReducer'
import { OrderStatus } from "../../../Domain/orders/Order";
import { Container,Row,Col, Table, Card } from "react-bootstrap";
import '../../styles/Order/OrdersBoard.module.scss'

let dummyIndex = -1

export default function OrdersBoard() {
    const orders  = useAppSelector(state => state.order.orders)
    const dispatch = useAppDispatch()
    const orderTableHeaders = ["#Id","Name","Date","Status","Phone" ,""];
    function addOrder(){
        dummyIndex++
        let dummyOrder = {
            id : "f21"+dummyIndex,
            State : OrderStatus.Delivery,
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
        <Container>
        <Card className="order-list-holder border-0 shadow rounded-3 my-5">
        <Card.Body className="card-body p-4 p-sm-5">
                <button onClick={() =>{addOrder()}} >Add</button>
                <button onClick={()=>{deleteOrder("f21")}}>Remove</button>
            <Table className="colored-header datatable order-list">
                <thead >
                    <tr>
                        {orderTableHeaders.map(headline=>{return <th>{headline}</th>}) }
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(orders).map(([key,value])=>{return <OrderCard key={'#'+value.id} index={key} ></OrderCard>})}  
                </tbody>
            </Table>
            </Card.Body >   
        </Card>
        </Container>
    )
    
}
