import React,{useState} from 'react'
import { Product } from '../../../models/catalogue/Types'

export default function ProductCard(props : Product){
    const [selectedSizeIndex,updatePrice] = useState(props.selectedSizeIndex)
    
    return (
        <div className='ProductCard'>
            <label className='ProductNameLabel'>Name </label>
            <input className='ProductNameField' value={props.name}></input>

            <label className='ProductPricesLabel'>Price </label>
            <label className='ProductPrice'>{selectedSizeIndex}</label>

            <label className='ProductSizeLabel'>Size</label>
            <select className='ProductSize'>
                {props.prices.map((element,index) =>{
                    return <option value={element} onChange={e=>{updatePrice(index)}}></option>
                })}
            </select>
            
            <label className='ProductDescription'>{props.description}</label>

            <img className='ProductImage' src={props.imageUrl}></img>
        </div>
    )
}