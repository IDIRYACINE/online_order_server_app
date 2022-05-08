import React,{useState} from "react";
import { Col,Form,Row } from "react-bootstrap";

export function AttributeRow(props : {hint:string , label:string, initialValue:string , onChange:(value:string)=>void }){
    const[value,setValue] = useState(props.initialValue)

    function updateForm(value:string){
        props.onChange(value)
        setValue(value)
    }

    return (
    <Row>
        <Col className="col-sm-3"><h6 className="mb-0">{props.label}</h6></Col>
        <Col className="col-sm-9"><Form.Control placeholder={props.hint} value={value} onChange={(e)=>updateForm(e.target.value)}/></Col>
    </Row>)
}