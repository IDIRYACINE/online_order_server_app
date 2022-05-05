import React from "react";
import { Card, Col,Form,Container,Row,Button } from "react-bootstrap";
import 'styles/LoginForm.module.css';

export default function LoginForm(props:any){
    let username = ''
    let password = ''

    function updateUsername(value:string){
        username = value
    }
    
    function updatePassword(value:string){
        password = value
    }

    return (   
          <Container >
            <Row>
              <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <Card className="border-0 shadow rounded-3 my-5">
                  <Card.Body className="card-body p-4 p-sm-5">
                    <Card.Title className="card-title text-center mb-5 fw-light fs-5">Sign In</Card.Title>
                    <Form>

                      <Form.Floating className="mb-3">
                        <Form.Control type="text" onChange={(e)=>updateUsername(e.target.value)} id="floatingInput" placeholder="Username"/>
                        <label htmlFor="floatingInput">Username</label>

                      </Form.Floating>
                      <Form.Floating className="mb-3">
                        <Form.Control type="password" onChange={(e)=>updatePassword(e.target.value)}  id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                      </Form.Floating>
        
                      <div className="d-grid">
                        <Button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={props.login(username,password)}>Signin</Button>
                      </div>
                      
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        
        
    )
}