import React,{useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";


export default function SizePriceForm(props:any){
    const[price,setPrice] = useState(props.price)
    const[size,setSize] = useState(props.size)

    function handlePriceChange(index:number,value:string){
        props.updatePrice(index,value)
        setPrice(value)
    }

    function handleSizeChange(index:number,value:string){
        props.updateSize(index,value)
        setSize(value)
    }

    return (
        <Form.Group className="my-2">
            <Row className="g-3">
            <Col className="col-sm"><Form.Control placeholder="Price" value={price} onChange={e=>handlePriceChange(props.index,e.target.value)}/></Col>

            <Col className="col-sm"><Form.Control placeholder="Size" value={size} onChange={e=>handleSizeChange(props.index,e.target.value)}/></Col>
            <Col className="col-sm"><Button onClick={()=>{props.remove(props.index)}}>Remove</Button></Col>
            </Row>
        </Form.Group>
    )

}
