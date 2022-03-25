import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Authentication } from "../../../Application/authentication/Authentication";
import { DatabaseSynchroniser } from "../../../Infrastructure/databaseSynchroniser/DatabaseSynchroniser";

export default function SettingsBoard(props:any) {

    return  (
    <Container>
        <button onClick={() =>{DatabaseSynchroniser.synchroniseDatabase({onSucess:()=>{},onFail:()=>{}})}} >Synchronise Database</button>
    </Container>);
        


       
    
    
}
