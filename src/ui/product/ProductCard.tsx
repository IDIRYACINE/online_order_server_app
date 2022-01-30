import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../api/ProductApi'
import { selectedCategoryId, setSelectedProductIndex } from '../../models/state'
import { useAppDispatch, useAppSelector } from '../../store/Hooks'
import { removeProduct } from '../../store/reducers/ProductsReducer'

export default function ProductCard(props:any){
    const product = useAppSelector(state => state.product[selectedCategoryId][props.index])
    const dispatch = useAppDispatch()
    const navigate =useNavigate()

    const [price,setPrice] = useState(0)
    const [size,setSize] = useState(0)

    function handleProductEdit(){
        setSelectedProductIndex(props.index)
        navigate("/EditProduct",{replace:true})
    }

    function handleProductDelete(){
        deleteProduct({
            productId : product.Id,
            categoryId : selectedCategoryId
        },{
            onSuccess : ()=>{dispatch(removeProduct({product:product}))},
            onFail : ()=>{console.log("fail")}
        })
    }

    return (
        <div className='ProductCard'>
            <label className='ProductNameLabel'>Name </label>
            <label className='ProductPriceLabel'>Price </label>
            <label className='ProductPrice'>{product.Price[size]}</label>

            <label className='ProductSizeLabel'>Size</label>
            <select className='ProductSize'>
                {product.Size.map((element,index) =>{
                    return <option value={element} onChange={e=>{setPrice(index)}}></option>
                })}
            </select>
            
            <label className='ProductDescription'>{product.Description}</label>

            <img className='ProductImage' src={product.ImageUrl}></img>

            <button className='EditButton' onClick={()=>{handleProductEdit()}}>Edit</button>
            <button className='DeleteButton' onClick={()=>{handleProductDelete()}}>Delete</button>
        </div>
    )
}