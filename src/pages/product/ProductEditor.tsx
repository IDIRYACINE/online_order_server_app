import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Col, Row} from 'react-bootstrap'
import { Attribute } from '../../api/ApiConfig'
import { updateProduct } from '../../api/ProductApi'
import {  ProductAttrIndexes } from '../../models/catalogue/Types'
import { selectedCategoryId, selectedProductIndex } from '../../models/state'
import { useAppDispatch, useAppSelector } from '../../store/Hooks'
import { updateProduct as update } from '../../store/reducers/ProductsReducer'
import MainElementForm from '../../components/forms/MainElementForm'
import SizePriceListForm from '../../components/forms/SizePriceListForm'


export default function ProductEditor(){
    const changedValues : Array<Attribute> = []
    const cachedValues :any = {}

    const product = useAppSelector(state=>state.product[selectedCategoryId][selectedProductIndex])
    const [ImageUrl , setImageUrl] = useState(product.ImageUrl)
    const [sizePriceFormList , setSizePriceFormList] = useState([0])
    const dispatch = useAppDispatch()
   
    function addSize(){
        product.Price.push("")
        product.Size.push("")
        setSizePriceFormList(sizePriceFormList.concat([1]))
    }

    function updateSize(index:number,value:string){
        product.Price[index] = value
        cacheValueChange(ProductAttrIndexes.Size,"Size",product.Size)
    }

    function updatePrice(index:number,value:string){
        product.Size[index] = value
        cacheValueChange(ProductAttrIndexes.Price,"Price",product.Price)
    }

    function updateName(value:string){
        cacheValueChange(ProductAttrIndexes.Name,"Name",value)
    }

    function updateImageUrl(value:string){
        setImageUrl(value) 
        cacheValueChange(ProductAttrIndexes.ImageUrl,"ImageUrl",value)
    }

    function updateDescription(value:string){
        cacheValueChange(ProductAttrIndexes.Description,"Description",value)
    }

    function removeSizePriceForm(id:number){
        product.Price.splice(id)
        product.Size.splice(id)
        setSizePriceFormList(sizePriceFormList.filter((item,index) => index!== id))
        cacheValueChange(ProductAttrIndexes.Price,"Price",product.Price)
        cacheValueChange(ProductAttrIndexes.Size,"Size",product.Size)
    }

    function cacheValueChange (index:number,name:string ,value:any){
        changedValues[index] = {name:name,value:value}
        cachedValues[name] = value
    }


    function save(){
        updateProduct({
            categoryId:selectedCategoryId,
            productId:product.Id,
            updatedValues : changedValues 
        },{
            onSuccess: ()=>{dispatch(update({oldProduct:product,updatedValues:changedValues}))},
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