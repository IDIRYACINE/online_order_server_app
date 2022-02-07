import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";


function SizePriceForm(props:any){
    return (
        <Form.Group className="my-2">
            <Row className="g-3">
            <Col className="col-sm"><Form.Control placeholder="Size" onChange={e=>props.updateSize(props.index,e.target.value)}/></Col>
            <Col className="col-sm"><Form.Control placeholder="Price" onChange={e=>props.updatePrice(props.index,e.target.value)}/></Col>
            <Col className="col-sm"><Button onClick={()=>{props.remove(props.index)}}>Remove</Button></Col>
            </Row>
        </Form.Group>
    )

}

export default function SizePriceListForm(props:any){
    return(
        <Form className="bg-white px-5 py-5 overflow-auto w-80 h-70 max-vh-20">
            {
                props.sizePriceFormList.map((_:any,index:any)=>{
                    return <SizePriceForm key={index} index={index} remove={props.removeSizePriceForm} updateSize={props.updateSize} updatePrice={props.updatePrice}/>
                })
            }

            <Button className="my-2" onClick={()=>props.addSize()}>Add Size</Button>

        </Form>
    )
}