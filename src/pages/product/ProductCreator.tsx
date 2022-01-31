import React, { useState } from 'react'
import { Form, Button,Image, ButtonGroup, Container, Col, Row } from 'react-bootstrap'
import { createProduct } from '../../api/ProductApi'
import MainElementForm from '../../components/forms/MainElementForm'
import SizePriceListForm from '../../components/forms/SizePriceListForm'
import { Product } from '../../models/catalogue/Types'
import { selectedCategoryId } from '../../models/state'
import { useAppDispatch } from '../../store/Hooks'
import { addProduct } from '../../store/reducers/ProductsReducer'


export default function ProductCreator(){
    const [ImageUrl , setImageUrl] = useState("")
    const [sizePriceFormList , setSizePriceFormList] = useState([0])
    const dispatch = useAppDispatch()

    const product:Product = {
        Id : "",
        Name : "",
        ImageUrl : ImageUrl,
        Description : "",
        Price : [],
        Size : [],
        Index : -1
    }
   
    function addSize(){
        product.Price.push("")
        product.Size.push("")
        setSizePriceFormList(sizePriceFormList.concat([1]))
    }

    function updateSize(index:number,value:string){
        product.Price[index] = value
    }

    function updatePrice(index:number,value:string){
        product.Size[index] = value
    }

    function updateName(value:string){
        product.Name = value
        product.Id = value
    }

    function updateImageUrl(value:string){
        setImageUrl(value) 
        product.ImageUrl=value
    }

    function updateDescription(value:string){
        
    }

    function removeSizePriceForm(id:number){
        product.Price.splice(id)
        product.Size.splice(id)
        setSizePriceFormList(sizePriceFormList.filter((item,index) => index!== id))
    }


    function save(){
        createProduct({
            product : product,
            categoryId : selectedCategoryId
        },{
            onSuccess: ()=>{dispatch(addProduct({product:product}))},
            onFail : (error) =>{console.log(error)}
        })
    
    }

    return (
        <Container className="bg-white">
        <Row>

        <Col>
            <MainElementForm updateImageUrl={updateImageUrl} updateName={updateName} updateDescription={updateDescription} save={save}
                ImageUrl={ImageUrl}
            />
        </Col>
        
        <Col>
            <SizePriceListForm sizePriceFormList={sizePriceFormList} removeSizePriceForm={removeSizePriceForm} addSize={addSize}
                updatePrice={updatePrice} updateSize={updateSize}
            />
        </Col>

        </Row>
        </Container>
    )
}