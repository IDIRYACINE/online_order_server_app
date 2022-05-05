import React, { useState } from 'react'
import {Col, Row,Container} from 'react-bootstrap'
import { updateProduct } from 'utils/api/ProductApi'
import { useAppDispatch, useAppSelector } from 'utils/store/Hooks'
import { updateProduct as update } from 'utils/store/reducers/ProductsReducer'
import MainElementForm from 'components/forms/MainElementForm'
import SizePriceListForm from 'components/forms/SizePriceListForm'
import { useNavigate, useParams } from 'react-router-dom'
import { CacheHelper } from 'utils/attributesCacher/CacheHelper'


export default function ProductEditor(){

    const dispatch = useAppDispatch()
    const params = useParams()
    const product = useAppSelector(state=>state.product[params.categoryId!][parseInt(params.productId!)])
    const navigate = useNavigate()
    const [ImageUrl , setImageUrl] = useState(product.ImageUrl)
    const [sizePriceFormList , setSizePriceFormList] = useState([0])
    const [priceList , setPrice] = useState(product.Price)
    const [sizeList ,setSize] = useState(product.Size)
    const [name , setName] = useState(product.Name)
    
    CacheHelper.setTargetAttributes('Product')
    
    function addSize(){
        setPrice(priceList.concat([""]))
        setSize(sizeList.concat([""]))
        setSizePriceFormList(sizePriceFormList.concat([1]))
    }

    function updateSize(index:number,value:string){
        let temp = [...sizeList]
        temp[index] = value
        setSize(temp)
        CacheHelper.cacheAttribute("Size",temp)
    }

    function updatePrice(index:number,value:string){
        let temp = [...priceList]
        temp[index] = value
        setPrice(temp)
        CacheHelper.cacheAttribute("Price",temp)
    }

    function updateName(value:string){
        setName(value)
        CacheHelper.cacheAttribute("Name",value)
    }

    function updateImageUrl(value:string){
        setImageUrl(value) 
        CacheHelper.cacheAttribute("ImageUrl",value)
    }

    function updateDescription(value:string){
        CacheHelper.cacheAttribute("Description",value)
    }

    function removeSizePriceForm(id:number){
        setPrice(priceList.filter((item: any,index: number) => index!==id))
        setSize(sizeList.filter((item: any,index: number) => index!==id))
        setSizePriceFormList(sizePriceFormList.filter((item,index) => index!== id))
        CacheHelper.cacheAttribute("Price",product.Price)
        CacheHelper.cacheAttribute("Size",product.Size)
    }
    
    function save(){
        updateProduct({
            categoryId:params.categoryId!,
            productId:product.Id,
            updatedValues : CacheHelper.getCachedValues()
        },{
            onSuccess: ()=>{
                dispatch(update({oldProduct:product,categoryKey:params.categoryId!,updatedValues:CacheHelper.getCachedValues()}))
                CacheHelper.resetCache()
                navigate(`/Category/${params.categoryId!}`,{replace:true})

            },
            onFail : (error) =>{
                console.log(error)
                CacheHelper.resetCache()
            }
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