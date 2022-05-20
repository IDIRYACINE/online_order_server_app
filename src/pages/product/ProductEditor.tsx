import React, { useState } from 'react'
import { Row,Container,Button,Card,Image,Form} from 'react-bootstrap'
import { updateProduct } from 'utils/api/ProductApi'
import { useAppDispatch, useAppSelector } from 'controllers/store/Hooks'
import { updateProduct as update } from 'controllers/store/reducers/ProductsReducer'
import SizePriceForm from 'components/forms/SizePriceListForm'
import { useNavigate, useParams } from 'react-router-dom'
import { CacheHelper } from 'controllers/attributesCacher/CacheHelper'
import { AttributeRow } from 'components/forms/Forms'
import styles from '../../styles/product/ProductEditor.module.scss'


export default function ProductEditor(){

    const dispatch = useAppDispatch()
    const params = useParams()
    const product = useAppSelector(state=>state.product[params.categoryId!][parseInt(params.productId!)])
    const navigate = useNavigate()
    const [imageUrl , setImageUrl] = useState(product.ImageUrl)
    const [priceList , setPrice] = useState(product.Price)
    const [sizeList ,setSize] = useState(product.Size)
    const [name , setName] = useState(product.Name)
    
    CacheHelper.setTargetAttributes('Product')
    
    function addSize(){
        setPrice(priceList.concat([""]))
        setSize(sizeList.concat([""]))
    }

    function updateSize(index:number,value:string){
        let temp = [...sizeList]
        temp[index] = value
        CacheHelper.cacheAttribute("Size",temp)
    }

    function updatePrice(index:number,value:string){
        let temp = [...priceList]
        temp[index] = value
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
                dispatch(update({oldProduct:product,categoryKey:params.categoryId!,updatedValues:CacheHelper.getCachedValueMap()}))
                CacheHelper.resetCache()
                navigate(`/Category/${params.categoryId!}`,{replace:true})

            },
            onFail : (error) =>{
                console.log(error)
                CacheHelper.resetCache()
            }
        })
    
    }

    function cancel(){
        navigate(`/Category/${params.categoryId!}`,{replace:true})
    }


    return (
        <Container >
        <Row className="row-cols-2">
            <Card>
                <Image className={styles['product-image']} src={imageUrl} />
                <Card className={styles['product-infos']}>
                <AttributeRow hint='Product Image' label='Image Url' initialValue={product.ImageUrl} onChange={updateImageUrl}></AttributeRow>
                <AttributeRow hint='Product Name' label='Name' initialValue={name} onChange={updateName}></AttributeRow>
                <AttributeRow hint='Product Description' label='Description' initialValue={product.Description} onChange={updateDescription}></AttributeRow>
                </Card>
            </Card>

            <Card>
            <Form className="bg-white px-5 py-5 overflow-auto w-80 h-70 max-vh-20">
            {
                priceList.map((_:any,index:any)=>{
                    
                    return <SizePriceForm key={index} index={index} size={sizeList[index]}
                    price={priceList[index]} remove={removeSizePriceForm}
                    updateSize={updateSize} updatePrice={updatePrice}/>
                })
            }

            <Button className="my-2" onClick={()=>addSize()}>Add Size</Button>

            </Form>
        </Card>

        </Row>
       

        <Row className= "pt-4 px-2">
        <Button className="my-1" onClick={()=>{cancel()}}>Cancel</Button>
        <Button className="my-1" onClick={()=>{save()}}>Save</Button>

        </Row>
       
    </Container>
    )
}