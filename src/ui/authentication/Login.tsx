import React,{useState} from 'react'
import Authentication from '../../models/authentication/Authentication'

export default function Login(props : any){

    let auth : Authentication = props.authentication
    
    function connect(){
        if(auth.LoginWithUsernameAndPassword("idir","idir")){
            console.log("logged In")
        }
    }

    return (
        <div className='Login'>
            <button onClick={(e) =>{connect()}}>Login</button>
        </div>
    )
}