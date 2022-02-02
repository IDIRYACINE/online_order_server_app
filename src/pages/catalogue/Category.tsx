import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'
import {useAppDispatch, useAppSelector } from '../../store/Hooks'
import { fetchProduct } from '../../api/ProductApi'
import { loadProduct } from '../../store/reducers/ProductsReducer'



export default function Category(){
    const params = useParams()
    const products = useAppSelector(state => state.product[params.categoryId!])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function navigateToProductCreation(){
        navigate("/CreateProduct",{replace:true})
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
            <button className='CreateProductButton' onClick={()=>{navigateToProductCreation()}}>New Product</button>
            <button className='LoadProductsButton' onClick={()=>{loadCategoryProducts()}}>Load Product</button>

            {products.map((element,index) =>{ 
                return <ProductCard key={index} data={element} categoryId={params.categoryId!} index={index}></ProductCard>
                })
            }

        </div>
    )
}