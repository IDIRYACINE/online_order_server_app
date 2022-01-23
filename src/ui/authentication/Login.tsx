import React from 'react'
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
        <div className='Login'>
            <label id='UserLabel'>Username</label>
            <input id='UserField' onChange={e=>updateLoginInfos('username',e.target.value)}></input>
            <label id='PasswordLabel'>Password</label>
            <input id='PasswordField' onChange={e=>updateLoginInfos('password',e.target.value)}></input>
            <button onClick={() =>{connect()}}>Login</button>
        </div>
    )
}