import React from "react"
import Button from "react-bootstrap/esm/Button"
import ButtonGroup from "react-bootstrap/esm/ButtonGroup"
import Form from "react-bootstrap/esm/Form"
import Image from "react-bootstrap/esm/Image"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"


export default function MainElementForm(props:any){
    
    return (
        <Form className="px-5 py-5" >    
        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-5"><Image src={props.ImageUrl} /></Col>
                <Col className="col-sm-5"><Form.Control type="Url" placeholder="Image Url" onChange={(e)=>{props.updateImageUrl(e.target.value)}}/></Col>
            </Row>
        </Form.Group>
          
        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-2"><Form.Label>Name</Form.Label></Col>
                <Col className="col-sm-8"><Form.Control placeholder="Name" onChange={(e)=>props.updateName(e.target.value)}/></Col>
            </Row>
        </Form.Group>

        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-2"><Form.Label>Description</Form.Label></Col>
                <Col className="col-sm-8"><Form.Control placeholder="Description" onChange={(e)=>props.updateDescription(e.target.value)}></Form.Control></Col>
            </Row>
        </Form.Group>
        <ButtonGroup className="py-3">
            <Button onClick={()=>{props.save()}}>Save</Button>
        </ButtonGroup>
        </Form>
    )
}