import React from "react";
import { useAppSelector } from "controllers/store/Hooks";
import OrderCard from 'components/order/OrderCard'
import { Container, Table, Card } from "react-bootstrap";


export default function OrdersBoard() {
    const orders  = useAppSelector(state => state.order.orders)
    const orderTableHeaders = ["#Id","Name","Date","Status","Phone" ,""];
    

    return (
        <Container>
        <Card className="order-list-holder border-0 shadow rounded-3 my-5">
        <Card.Body className="card-body p-4 p-sm-5">
              
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
