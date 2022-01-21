import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks'
import { update } from '../../../redux/reducers/ProductsReducer'

export default function ProductCard(){
    const product = useAppSelector(state => state.product.products[0])
    const dispatch = useAppDispatch()

    let updatePrice = (index :number)=>{
        dispatch(update)
    }

    return (
        <div className='ProductCard'>
            <label className='ProductNameLabel'>Name </label>
            <input className='ProductNameField' value={product.name}></input>

            <label className='ProductPricesLabel'>Price </label>
            <label className='ProductPrice'>{product.selectedSizeIndex}</label>

            <label className='ProductSizeLabel'>Size</label>
            <select className='ProductSize'>
                {product.prices.map((element,index) =>{
                    return <option value={element} onChange={e=>{updatePrice(index)}}></option>
                })}
            </select>
            
            <label className='ProductDescription'>{product.description}</label>

            <img className='ProductImage' src={product.imageUrl}></img>
        </div>
    )
}