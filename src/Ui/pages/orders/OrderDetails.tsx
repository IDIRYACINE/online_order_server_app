import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MapComponent from "../../components/map/Map";
import { useAppSelector } from "../../../Application/store/Hooks";
import styles from '../../styles/Order/OrderDetaills.module.scss'


function OrderItemsCard(props:any){
    return (
        <Card>
            <Card.Body>
            {props.items.map((value: any,index:any)=>{
                                return <OrderItem key={index} infos={value}></OrderItem>
                            })
            }
            </Card.Body>
            <Card.Footer>Total Price : {totalPriceCalc(props.items)} Da</Card.Footer>
        </Card>
    )
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
        <Card className={styles['customer-card']+" mb-3"}>
            <Card.Body className={styles['card-body']}>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Full Name</h6></Col>
                    <Col className="col-sm-9 text-secondary">{props.order.FullName}</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Phone</h6></Col>
                    <Col className="col-sm-9 text-secondary">{props.order.PhoneNumber}</Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="col-sm-3"><h6 className="mb-0">Address</h6></Col>
                    <Col className="col-sm-9 text-secondary">{props.order.Address}</Col>
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
            <Col className={styles['map-col'] + " col-md-6"}><MapComponent center={{lat:order.Latitude ,lng: order.Longitude}} zoom={zoom}></MapComponent></Col>
        </Container>
    )

}