import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../api/ProductApi'
import { selectedCategoryId, setSelectedProductIndex } from '../../models/state'
import { useAppDispatch, useAppSelector } from '../../store/Hooks'
import { removeProduct } from '../../store/reducers/ProductsReducer'

export default function ProductCard(props:any){
    const product = useAppSelector(state => state.product[selectedCategoryId][props.index])
    const dispatch = useAppDispatch()
    const navigate =useNavigate()

    function handleProductEdit(){
        setSelectedProductIndex(props.index)
        navigate("/EditProduct",{replace:true})
    }

    function handleProductDelete(){
        deleteProduct({
            productId : product.Id,
            categoryId : selectedCategoryId
        },{
            onSuccess : ()=>{dispatch(removeProduct({product:product}))},
            onFail : ()=>{console.log("fail")}
        })
    }

    return (
        <Card>
            <Card.Header>{product.Name}</Card.Header>
            <Card.Body>
                <Card.Img src={product.ImageUrl}/>
                <Card.Text>Default Size : {product.Size[0]}</Card.Text>
                <Card.Text>Price : {product.Price[0]}</Card.Text>
                <Button onClick={()=>{handleProductEdit()}}>Edit</Button>
                <Button onClick={()=>{handleProductDelete()}}>Delete</Button>
            </Card.Body>
        </Card>
    )
}