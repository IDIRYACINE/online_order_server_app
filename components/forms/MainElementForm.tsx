import React from "react"
import {Col,Form,Row,Button,Image,ButtonGroup } from "react-bootstrap";



export default function MainElementForm(props:any){
    
    return (
        <Form className="px-5 py-5" >    
        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-5"><Image src={props.ImageUrl} /></Col>
                <Col className="col-sm-5"><Form.Control type="Url" placeholder="Image Url" value={props.ImageUrl} onChange={(e)=>{props.updateImageUrl(e.target.value)}}/></Col>
            </Row>
        </Form.Group>
          
        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-2"><Form.Label>Name</Form.Label></Col>
                <Col className="col-sm-8"><Form.Control placeholder="Name" value={props.name} onChange={(e)=>props.updateName(e.target.value)}/></Col>
            </Row>
        </Form.Group>

        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-2"><Form.Label>Description</Form.Label></Col>
                <Col className="col-sm-8"><Form.Control placeholder="Description" value={props.description} onChange={(e)=>props.updateDescription(e.target.value)}></Form.Control></Col>
            </Row>
        </Form.Group>
        <ButtonGroup className="py-3">
            <Button onClick={()=>{props.save()}}>Save</Button>
        </ButtonGroup>
        </Form>
    )
}