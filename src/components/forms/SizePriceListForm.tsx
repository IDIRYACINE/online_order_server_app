import React,{useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";


function SizePriceForm(props:any){
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

export default function SizePriceListForm(props:any){
    return(
        <Form className="bg-white px-5 py-5 overflow-auto w-80 h-70 max-vh-20">
            {
                props.sizePriceFormList.map((_:any,index:any)=>{
                    return <SizePriceForm key={index} index={index} size={props.sizeList[index]} price={props.priceList[index]} remove={props.removeSizePriceForm} updateSize={props.updateSize} updatePrice={props.updatePrice}/>
                })
            }

            <Button className="my-2" onClick={()=>props.addSize()}>Add Size</Button>

        </Form>
    )
}