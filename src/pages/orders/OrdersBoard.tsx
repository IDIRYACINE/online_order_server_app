import React from "react";
import { useAppDispatch, useAppSelector } from "controllers/store/Hooks";
import OrderCard from 'components/order/OrderCard'
import {add, remove} from 'controllers/store/reducers/OrdersReducer'
import { OrderStatus } from "data/orders/Order";
import { Container, Table, Card } from "react-bootstrap";

let dummyIndex = -1

export default function OrdersBoard() {
    const orders  = useAppSelector(state => state.order.orders)
    const dispatch = useAppDispatch()
    const orderTableHeaders = ["#Id","Name","Date","Status","Phone" ,""];
    function addOrder(){
        dummyIndex++
        let dummyOrder = {
            id : dummyIndex.toString(),
            state : OrderStatus.Waiting,
            items : [
                {  name : "test",
                    size : "small",
                    price : 32,
                    quantity : 3
                }
            ],
            phoneNumber : "052222",
            email : "idir@gmail",
            banStatus : "Normal",
            fullName : 'idir',
            latitude:2,
            longitude:3,
            address : 'bba',
            time : 6.38
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
                        {orderTableHeaders.map(headline=>{return <th key={'#'+headline}>{headline}</th>}) }
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
