import React from "react";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"


export default function LoginForm(props:any){
    let email = ''
    let password = ''

    function updateEmail(value:string){
        email = value
    }
    
    function updatePassword(value:string){
        password = value
    }

    return (
        <Form className="px-5 py-5" >    
        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-2"><Form.Label>Email</Form.Label></Col>
                <Col className="col-sm-8"><Form.Control placeholder="example@something.com" onChange={(e)=>updateEmail(e.target.value)}/></Col>
            </Row>
        </Form.Group>

        <Form.Group>
            <Row className="g-3">
                <Col className="col-sm-2"><Form.Label>Password</Form.Label></Col>
                <Col className="col-sm-8"><Form.Control placeholder="Password" onChange={(e)=>updatePassword(e.target.value)}></Form.Control></Col>
            </Row>
        </Form.Group>
        
        <Button className="py-3" onClick={()=>{props.login(email,password)}}>Login</Button>
    
        </Form>
    )
}