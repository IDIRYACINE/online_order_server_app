import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/auth/LoginForm'
import {Authentication} from '../../../Application/authentication/Authentication'

export default function Login(){

    let navigate = useNavigate()

    function connect(username:string , password :string){
        Authentication.setOnConnectAction(onConnectCallback)
        Authentication.loginWithUsernameAndPassword(username,password)
    }

    function onConnectCallback(){
        navigate('/Orders',{replace:true})
    }

    return (
        <Container>
          <LoginForm login={connect}></LoginForm>
        </Container>
    )
}