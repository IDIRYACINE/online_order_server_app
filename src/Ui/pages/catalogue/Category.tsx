import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'
import {useAppDispatch, useAppSelector } from '../../../Application/store/Hooks'
import { fetchProduct } from '../../../Infrastructure/api/ProductApi'
import { loadProduct } from '../../../Application/store/reducers/ProductsReducer'
import { Row,Button } from 'react-bootstrap'



export default function Category(){
    const params = useParams()
    const products = useAppSelector(state => state.product[params.categoryId!])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function navigateToProductCreation(){
        navigate(`/CreateProduct/${ params.categoryId!}`,{replace:true})
    }

    function loadCategoryProducts(){
        fetchProduct({
            startIndex:"0",
            count : "2",
            categoryId : params.categoryId!
        },{
            onSuccess:(response)=>{dispatch(loadProduct({categoryKey:params.categoryId!,products:response.data}))},
            onFail:(error)=>{console.log(error)}
        })
    }

    return (
        <div className='Category'>
            
            <Row >
                <Button className='mb-2' onClick={()=>{navigateToProductCreation()}}>New Product</Button>
                <Button className='mb-2' onClick={()=>{loadCategoryProducts()}}>Load</Button>
            </Row>

            <Row className="row-cols-3">
            {
               products.map((element,index) =>{ 
                return <ProductCard key={index} data={element} categoryId={params.categoryId!} index={index}></ProductCard>
                })
            }
            </Row>

            

        </div>
    )
}