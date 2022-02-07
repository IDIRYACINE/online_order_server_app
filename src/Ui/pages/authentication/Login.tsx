import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/forms/LoginForm'
import {loginWithUsernameAndPassword,setOnConnectAction} from '../../../Application/authentication/Authentication'

export default function Login(){

    let navigate = useNavigate()

    function connect(username:string , password :string){
        setOnConnectAction(onConnectCallback)
        loginWithUsernameAndPassword(username,password)
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