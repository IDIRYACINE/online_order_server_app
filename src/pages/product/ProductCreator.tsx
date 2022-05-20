import React, { useState } from 'react'
import { Container, Row ,Image,Card, Button,Form} from 'react-bootstrap'
import { createProduct } from 'utils/api/ProductApi'
import SizePriceForm from 'components/forms/SizePriceListForm'
import { Product } from 'data/catalogue/Types'
import { useAppDispatch } from 'controllers/store/Hooks'
import { addProduct } from 'controllers/store/reducers/ProductsReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { AttributeRow } from 'components/forms/Forms'
import styles from '../../styles/product/ProductCreator.module.scss'

export default function ProductCreator(){
    const params = useParams()
    const [imageUrl , setImageUrl] = useState("")
    const [sizePriceFormList , setSizePriceFormList] = useState([0])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const product:Product = {
        Id : "",
        Name : "",
        ImageUrl : imageUrl,
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
        product.Description = value
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
/*

*/
    function cancel(){
        navigate(`/Category/${params.categoryId!}`,{replace:true})
    }

    return (
        <Container >
        <Row className="row-cols-2">
            <Card>
                <Image className={styles['product-image']} src={imageUrl} />
                <Card className={styles['product-infos']}>
                <AttributeRow hint='Product Image' label='Image Url' initialValue='' onChange={updateImageUrl}></AttributeRow>
                <AttributeRow hint='Product Name' label='Name' initialValue='' onChange={updateName}></AttributeRow>
                <AttributeRow hint='Product Description' label='Description' initialValue='' onChange={updateDescription}></AttributeRow>
                </Card>
            </Card>

            <Card>
            <Form className="bg-white px-5 py-5 overflow-auto w-80 h-70 max-vh-20">
            {
                sizePriceFormList.map((_:any,index:any)=>{
                    
                    return <SizePriceForm key={index} index={index} size={product.Size[index]}
                    price={product.Price[index]} remove={removeSizePriceForm}
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