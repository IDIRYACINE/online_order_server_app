import React, { useState } from 'react'
import { Product } from '../../../models/catalogue/Types'

function Accesory(){
    return (
        <div>
            <input className='Size'></input>
            <input className='Price'></input>
            <button className='RemoveAccessory' onClick={}>Remove</button>
        </div>
    )

}

export default function ProductEdit(props : Product){
    const [sizes,updateSizes] = useState(props.selectedSizeIndex)
    
    let AddSize = ()=>{

    }
     

    return (
        <div className='ProductEdit'>
            <img className='ProductImage' src={props.imageUrl}></img>

            <label className='ProductNameLabel'>Name </label>
            <input className='ProductNameField' value={props.name}></input>

            <label className='ProductDescription'>{props.description}</label>

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