import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCustomerExtras } from "../../api/OrdersApi";
import MapComponent from "../../components/map/Map";
import { Product } from "../../models/catalogue/Types";
import { useAppSelector } from "../../store/Hooks";

function OrderItemList(props:any){
    return (
        <Container>
            {props.items.map((value: any,index:any)=>{
                return <OrderItem key={index} infos={value}></OrderItem>
            })
            }
        </Container>
    )
}

function OrderItem(props:any){
    return (
        <Container>
            <Row className="g-3">
                <Col className="col-sm-4"><Form.Label>{props.Name}</Form.Label></Col>
                <Col className="col-sm-3"><Form.Label>X{props.Quantity}</Form.Label></Col>
                <Col className="col-sm-3"><Form.Label>{props.Price * props.Quantity}</Form.Label></Col>
            </Row>
        </Container>
    )
}

function OrderInfo(props:any){
    return (
        <Card>
            <Card.Header>{props.id}</Card.Header>
            <Card.Body>
                <Card.Text>{props.order.customerName}</Card.Text>
                <Card.Text>{props.order.address}</Card.Text>
                <OrderItemList items={props.order.items}></OrderItemList>
            </Card.Body>
            <Card.Footer>Total Price : 300 Da</Card.Footer>
        </Card>
    )
}

export default function OrderDetails(){
    let params = useParams();
    const order = useAppSelector(state=>state.order[params.orderId!])
    const zoom = 8

    return (
        <Container>
            <Row className="g-3">
                <Col className="col-sm-5"><OrderInfo order={order}></OrderInfo></Col>
                <Col className="col-sm-5"><MapComponent center={order.coordinations} zoom={zoom}></MapComponent></Col>
            </Row>
    
        </Container>
    )
}