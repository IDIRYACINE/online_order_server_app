import React from "react";
import { Container } from "react-bootstrap";
import { DatabaseSynchroniser } from "utils/databaseSynchroniser/DatabaseSynchroniser";

export default function SettingsBoard(props:any) {

    return  (
    <Container>
        <button onClick={() =>{DatabaseSynchroniser.synchroniseDatabase({onSuccess:()=>{},onFail:()=>{}})}} >Synchronise Database</button>
    </Container>);
        


       
    
    
}
