import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {loginWithUsernameAndPassword,setOnConnectAction} from '../../models/authentication/Authentication'

export default function Login(){
    let loginInfos : any = {}
    let navigate = useNavigate()

    function connect(){
        setOnConnectAction(onConnectCallback)
        loginWithUsernameAndPassword(loginInfos.username,loginInfos.password)
    }

    function onConnectCallback(){
        navigate('/Orders',{replace:true})
    }

    function updateLoginInfos(name:string , value:any){
        loginInfos[name] = value
    }

    return (
        <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form> 
        </Container>
    )
}