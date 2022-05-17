import React from "react";
import { Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MapComponent from "components/map/Map";
import { useAppSelector } from "controllers/store/Hooks";
import styles from '../../styles/order/OrderDetaills.module.scss'
import OrderStatusButton from 'components/order/OrderStatusButton';


function OrderItemsCard(props:any){
    
    return (
        <Card>
            <Card.Body>
            <Table className="colored-header datatable order-list">
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {props.items.map((value: any,index:any)=>{
                                return <OrderItem key={index} infos={value}></OrderItem>
                            })
                }
                </tbody>
            </Table>
           
            </Card.Body>
            <Card.Footer>Total Price : {totalPriceCalc(props.items)} Da</Card.Footer>
        </Card>
    )
}

function OrderItem(props:any){
    
    return (  
            <tr>
                <td ><Form.Label>{props.infos.name}</Form.Label></td>
                <td ><Form.Label>{props.infos.size}</Form.Label></td>
                <td><Form.Label>X{props.infos.quantity}</Form.Label></td>
                <td ><Form.Label>{props.infos.price}</Form.Label></td>
            </tr>
    )
}

function OrderInfo(props:any){
    const modalStyle = {
        content: {
            top: '40%',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
          height: "20%",
          width : "20%"
        }} 
    return (
        <Card className={styles['customer-card']+" mb-3"}>
            <Card.Body className={styles['card-body']}>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Full Name</h6></Col>
                    <Col className="col-sm-9 text-secondary">{props.order.customerName}</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Phone</h6></Col>
                    <Col className="col-sm-9 text-secondary">{props.order.phoneNumber}</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Address</h6></Col>
                    <Col className="col-sm-9 text-secondary">{props.order.address}</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Order Status</h6></Col>
                    <Col className="col-sm-9 text-secondary">{<OrderStatusButton orderState={props.order.state} orderId={props.order.id} modalStyle={modalStyle} />}</Col>
                </Row>
                <hr></hr>
            </Card.Body>
        </Card>                           
    )
}

function totalPriceCalc(items : Array<any>) : number{ 
    let priceTotal = 0
    items.forEach((item) =>{
        priceTotal += item.price * item.quantity
    })
    return priceTotal
}

export default function OrderDetails(){
    let params = useParams();
    const order = useAppSelector(state=>state.order.orders[params.orderId!])
    const zoom = 8
    return (
        <Container className="align-self-start">
            <Col className="col-md-5">
                <Row><OrderInfo order={order}></OrderInfo></Row>
                <Row><OrderItemsCard items={order.items}></OrderItemsCard></Row>
            </Col>
            <Col className={styles['map-col'] + " col-md-6"}><MapComponent center={{lat:order.latitude ,lng: order.longitude}} zoom={zoom}></MapComponent></Col>
        </Container>
    )

}