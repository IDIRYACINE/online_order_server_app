import React from 'react'
import {useNavigate } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import {useAppDispatch, useAppSelector } from '../../redux/Hooks'
import { selectedCategoryId } from '../../models/state'
import { fetchProduct } from '../../api/ProductApi'
import { loadProduct } from '../../redux/reducers/ProductsReducer'



export default function Category(){
    const products = useAppSelector(state => state.product[selectedCategoryId])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function navigateToProductCreation(){
        navigate("/CreateProduct",{replace:true})
    }

    function loadCategoryProducts(){
        fetchProduct({
            startIndex:"0",
            count : "2",
            categoryId : selectedCategoryId
        },{
            onSuccess:(response)=>{dispatch(loadProduct({categoryKey:selectedCategoryId,products:response.data}))},
            onFail:(error)=>{console.log(error)}
        })
    }

    return (
        <div className='Category'>
            <button className='CreateProductButton' onClick={()=>{navigateToProductCreation()}}>New Product</button>
            <button className='LoadProductsButton' onClick={()=>{loadCategoryProducts()}}>Load Product</button>

            {products.map((element,index) =>{ 
                return <ProductCard key={index} data={element} index={index}></ProductCard>
                })
            }

        </div>
    )
}