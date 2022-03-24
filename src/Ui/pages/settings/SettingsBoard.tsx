import React from "react";
import { DatabaseSynchroniser } from "../../../Infrastructure/databaseSynchroniser/DatabaseSynchroniser";

export default function SettingsBoard() {
   
   

    return (
        <div className="settingsBoard">
            
            <button onClick={() =>{DatabaseSynchroniser.synchroniseDatabase({onSucess:()=>{},onFail:()=>{}})}} >Synchronise Database</button>
        </div>    
    )
    
}
