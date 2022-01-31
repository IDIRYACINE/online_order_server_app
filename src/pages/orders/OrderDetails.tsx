import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import MapComponent from "../../components/map/Map";
import { Product } from "../../models/catalogue/Types";

function OrderItemList(props:any){
    return (
        <Container>
            {props.items.map((value: any)=>{
                return <OrderItem infos={value}></OrderItem>
            })
            }
        </Container>
    )
}

function OrderItem(props:any){

    return (
        <Container>
            <Row className="g-3">
                <Col className="col-sm-4"><Form.Label>Name</Form.Label></Col>
                <Col className="col-sm-3"><Form.Label>X4</Form.Label></Col>
                <Col className="col-sm-3"><Form.Label>Price</Form.Label></Col>
            </Row>
        </Container>
    )
}

function OrderInfo(props:any){
    const items = [1,2,2,3]
    return (
        <Card>
            <Card.Header>{props.id}</Card.Header>
            <Card.Body>
                <Card.Text>{props.customerName}</Card.Text>
                <Card.Text>{props.addresse}</Card.Text>
                <Card.Text>{props.time}</Card.Text>
                <OrderItemList items={items}></OrderItemList>
            </Card.Body>
            <Card.Footer>Total Price : 300 Da</Card.Footer>
        </Card>
    )
}

export default function OrderDetails(props:any){
    const coordinates = {lat:100,lng:200}
    const zoom = {zoom : 8}
    return (
        <Container>
            <Row className="g-3">
                <Col className="col-sm-5"><OrderInfo ></OrderInfo></Col>
                <Col className="col-sm-5"><MapComponent center={coordinates} zoom={zoom}></MapComponent></Col>
            </Row>
    
        </Container>
    )
}