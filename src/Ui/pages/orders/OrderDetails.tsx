import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MapComponent from "../../components/map/Map";
import { useAppSelector } from "../../../Application/store/Hooks";

function OrderItemList(props:any){
    return props.items.length > 0? (
        <Container>
            {props.items.map((value: any,index:any)=>{
                return <OrderItem key={index} infos={value}></OrderItem>
            })
            }
        </Container>
    ) : (<Container></Container>)
}

function OrderItem(props:any){
    console.log(props)
    return (
        
        <Container>
            <Row className="g-3">
                <Col className="col-sm-4"><Form.Label>{props.infos.name}</Form.Label></Col>
                <Col className="col-sm-3"><Form.Label>X{props.infos.quantity}</Form.Label></Col>
                <Col className="col-sm-3"><Form.Label>{props.infos.price}</Form.Label></Col>
            </Row>
        </Container>
    )
}

function OrderInfo(props:any){
    return (
        <Card>
            <Card.Header>{props.id}</Card.Header>
            <Card.Body>
                <Card.Text>{props.order.FullName +'  -  '+ props.order.PhoneNumber}</Card.Text>
                <Card.Text>{props.order.Address}</Card.Text>
                <OrderItemList items={props.order.items}></OrderItemList>
            </Card.Body>
            <Card.Footer>Total Price : {totalPriceCalc(props.order.items)} Da</Card.Footer>
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
        <Container>
            <Row className="g-3">
                <Col className="col-sm-5"><OrderInfo order={order}></OrderInfo></Col>
                <Col className="col-sm-5"><MapComponent center={{lat:order.Latitude ,lng: order.Longitude}} zoom={zoom}></MapComponent></Col>
            </Row>
    
        </Container>
    )

}