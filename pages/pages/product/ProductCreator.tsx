import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { createProduct } from 'utils/api/ProductApi'
import MainElementForm from 'components/forms/MainElementForm'
import SizePriceListForm from 'components/forms/SizePriceListForm'
import { Product } from 'utils/catalogue/Types'
import { useAppDispatch } from 'utils/store/Hooks'
import { addProduct } from 'utils/store/reducers/ProductsReducer'
import { useNavigate, useParams } from 'react-router-dom'


export default function ProductCreator(){
    const params = useParams()
    const [ImageUrl , setImageUrl] = useState("")
    const [sizePriceFormList , setSizePriceFormList] = useState([0])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


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
        product.Size[index] = value
    }

    function updatePrice(index:number,value:string){
        product.Price[index] = value
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
            categoryId : params.categoryId!
        },{
            onSuccess: ()=>{
                dispatch(addProduct({product:product,categoryKey:params.categoryId!}))
                navigate(`/Category/${params.categoryId!}`,{replace:true})
            },
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
            <SizePriceListForm sizeList={product.Size} priceList={product.Price} sizePriceFormList={sizePriceFormList} removeSizePriceForm={removeSizePriceForm} addSize={addSize}
                updatePrice={updatePrice} updateSize={updateSize}
            />
        </Col>

        </Row>
        </Container>
    )
}