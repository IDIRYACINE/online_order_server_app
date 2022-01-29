import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'

function Accesory(){
    return (
        <div>
            <input className='Size'></input>
            <input className='Price'></input>
            <button className='RemoveAccessory' onClick={()=>{}}>Remove</button>
        </div>
    )

}

export default function ProductEdit(){
    const product = useAppSelector(state => state.product.products[0])
    const dispatch = useAppDispatch()

    let AddSize = ()=>{

    }
     

    return (
        <div className='ProductEdit'>
            <img className='ProductImage' src={product.ImageUrl}></img>

            <label className='ProductNameLabel'>Name </label>
            <input className='ProductNameField' value={product.Name}></input>

            <label className='ProductDescription'>{product.Description}</label>

            <div className='Accesory'>
                <div className='AccesoryLabels'>
                    <label className='SizeLabel'>Size</label>
                    <label className='PriceLabel'>Price</label>
                </div>
                
                <div className='AccesoryList'>
                    {}
                </div>

                <button className='AddSizeButton' onClick={()=>{}}>Add Size</button>

            </div>
            
           
            
           
        </div>
    )
}