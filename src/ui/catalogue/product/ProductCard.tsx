import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setSelectedProductIndex } from '../../../models/state'
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks'
import { remove, update } from '../../../redux/reducers/ProductsReducer'

let selectedSizeIndex = 0

export default function ProductCard(props:any){
    const product = useAppSelector(state => state.product.products[props.index])
    const dispatch = useAppDispatch()
    const navigate =useNavigate()

    const [price,setPrice] = useState(0)
    const [size,setSize] = useState(0)

    function handleProductEdit(){
        setSelectedProductIndex(props.index)
        navigate("/ProductEdit",{replace:true})
    }

    function handleProductDelete(){
        dispatch(remove({product:product}))
    }

    return (
        <div className='ProductCard'>
            <label className='ProductNameLabel'>Name </label>
            <input className='ProductNameField' value={product.name}></input>

            <label className='ProductPricesLabel'>Price </label>
            <label className='ProductPrice'>{product.prices[size]}</label>

            <label className='ProductSizeLabel'>Size</label>
            <select className='ProductSize'>
                {product.prices.map((element,index) =>{
                    return <option value={element} onChange={e=>{setPrice(index)}}></option>
                })}
            </select>
            
            <label className='ProductDescription'>{product.description}</label>

            <img className='ProductImage' src={product.imageUrl}></img>

            <button className='EditButton' onClick={()=>{handleProductEdit()}}>Edit</button>
            <button className='DeleteButton' onClick={()=>{handleProductDelete()}}>Delete</button>
        </div>
    )
}