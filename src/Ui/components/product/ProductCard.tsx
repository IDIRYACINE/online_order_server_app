import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../../Infrastructure/api/ProductApi'
import { useAppDispatch, useAppSelector } from '../../../Application/store/Hooks'
import { removeProduct } from '../../../Application/store/reducers/ProductsReducer'

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