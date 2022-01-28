import React from 'react'
import {useNavigate } from 'react-router-dom'
import ProductCard from './product/ProductCard'
import {useAppSelector } from '../../redux/Hooks'



export default function Category(){
    const products = useAppSelector(state => state.product.products)
    const navigate = useNavigate()

    function navigateToProductCreation(){
        navigate("/CreateProduct",{replace:true})
    }

    return (
        <div className='Category'>
            <button className='CreateProductButton' onClick={()=>{navigateToProductCreation()}}>New Category</button>
            {products.map((element,index) =>{ 
                return <ProductCard key={index} data={element} index={index}></ProductCard>
                })
            }

        </div>
    )
}