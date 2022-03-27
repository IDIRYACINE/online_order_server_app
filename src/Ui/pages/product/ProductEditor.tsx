import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Col, Row} from 'react-bootstrap'
import { Attribute } from '../../../Infrastructure/api/ApiConfig'
import { updateProduct } from '../../../Infrastructure/api/ProductApi'
import {  ProductAttrIndexes } from '../../../Domain/catalogue/Types'
import { useAppDispatch, useAppSelector } from '../../../Application/store/Hooks'
import { updateProduct as update } from '../../../Application/store/reducers/ProductsReducer'
import MainElementForm from '../../components/forms/MainElementForm'
import SizePriceListForm from '../../components/forms/SizePriceListForm'
import { useParams } from 'react-router-dom'
import { setTokenSourceMapRange } from 'typescript'


export default function ProductEditor(){
    const dispatch = useAppDispatch()
    const params = useParams()
    const product = useAppSelector(state=>state.product[params.categoryId!][parseInt(params.productId!)])

    const [ImageUrl , setImageUrl] = useState(product.ImageUrl)
    const [sizePriceFormList , setSizePriceFormList] = useState([0])
    const [priceList , setPrice] = useState(product.Price)
    const [sizeList ,setSize] = useState(product.Size)
    const [name , setName] = useState(product.Name)
    const changedValues : Array<Attribute> = []
    const cachedValues :any = {}
   
    function addSize(){
        setPrice(priceList.concat([""]))
        setSize(sizeList.concat([""]))
        setSizePriceFormList(sizePriceFormList.concat([1]))
    }

    function updateSize(index:number,value:string){
        let temp = [...sizeList]
        temp[index] = value
        cacheValueChange(ProductAttrIndexes.Size,"Size",product.Size)
        setSize(temp)

    }

    function updatePrice(index:number,value:string){
        let temp = [...priceList]
        temp[index] = value
        cacheValueChange(ProductAttrIndexes.Price,"Price",product.Price)
        setPrice(temp)
    }

    function updateName(value:string){
        setName(value)
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
        setPrice(priceList.filter((item: any,index: number) => index!==id))
        setSize(sizeList.filter((item: any,index: number) => index!==id))
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
            categoryId:params.categoryId!,
            productId:product.Id,
            updatedValues : changedValues 
        },{
            onSuccess: ()=>{dispatch(update({oldProduct:product,categoryKey:params.categoryId!,updatedValues:changedValues}))},
            onFail : (error) =>{console.log(error)}
        })
    
    }

    return (
        <Container className="bg-white">
        <Row>
        <Col>
            <MainElementForm name={name} description={product.Description} updateImageUrl={updateImageUrl} updateName={updateName} updateDescription={updateDescription} save={save}
                ImageUrl={ImageUrl}
            />
        </Col>
        
        <Col>
            <SizePriceListForm sizePriceFormList={sizePriceFormList} sizeList={sizeList} priceList={priceList} removeSizePriceForm={removeSizePriceForm} addSize={addSize}
                updatePrice={updatePrice} updateSize={updateSize}
            />
        </Col>

        </Row>
        </Container>
    )
}