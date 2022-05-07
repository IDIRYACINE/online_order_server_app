import React from 'react'
import {  Card,Image,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../../Infrastructure/api/ProductApi'
import { useAppDispatch, useAppSelector } from '../../../Application/store/Hooks'
import { removeProduct } from '../../../Application/store/reducers/ProductsReducer'
import styles from '../../../Ui/styles/Product/ProductCard.module.scss'

export default function ProductCard(props:any){
    const product = useAppSelector(state => state.product[props.categoryId][props.index])
    const dispatch = useAppDispatch()
    const navigate =useNavigate()

    function handleProductEdit(){
        navigate(`/EditProduct/${props.categoryId}/${props.index}`,{replace:true})
    }

    function handleProductDelete(){
        deleteProduct({
            productId : product.Id,
            categoryId : props.categoryId
        },{
            onSuccess : ()=>{dispatch(removeProduct({product:product,categoryKey:props.categoryId}))},
            onFail : ()=>{console.log("fail")}
        })
    }

    return (
        <Card className={styles['product-card'] }>
        <Image className={styles['product-image']} src ={product.ImageUrl}/>
        <h3 className="fw-bold py-2 ">{product.Name}</h3>
       

        <Card.Body className="px-5">
        <Row>
            <Col ><button className="btn btn-link" onClick={()=>{handleProductDelete()}}>Delete</button></Col>
            <Col><button className="btn btn-link" onClick={()=>{handleProductEdit()}}>Edit</button></Col>
        </Row>
        </Card.Body>
    </Card>

    )
}