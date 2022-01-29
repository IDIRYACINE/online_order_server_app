import React, { useState } from 'react'
import { Attribute } from '../../api/ApiConfig'
import { updateProduct } from '../../api/ProductApi'
import {  ProductAttrIndexes } from '../../models/catalogue/Types'
import { selectedCategoryId, selectedProductIndex } from '../../models/state'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'
import { updateProduct as update } from '../../redux/reducers/ProductsReducer'

function Accesory(props:any){
    return (
        <div>
            <input className='Size' onChange={e=>props.updateSize(props.index,e.target.value)}></input>
            <input className='Price' onChange={e=>props.updatePrice(props.index,e.target.value)}></input>
            <button className='RemoveAccessory' onClick={()=>{props.remove(props.index)}}>Remove</button>
        </div>
    )

}

export default function ProductEditor(){
    const changedValues : Array<Attribute> = []
    const cachedValues :any = {}

    const product = useAppSelector(state=>state.product[selectedCategoryId][selectedProductIndex])
    const [ImageUrl , setImageUrl] = useState(product.ImageUrl)
    const [AccesoryList , setAccessoryList] = useState([0])
    const dispatch = useAppDispatch()
   
    function AddSize(){
        product.Price.push("")
        product.Size.push("")
        setAccessoryList(AccesoryList.concat([1]))
    }

    function updateSize(index:number,value:string){
        product.Price[index] = value
        cacheValueChange(ProductAttrIndexes.Size,"Size",product.Size)
    }

    function updatePrice(index:number,value:string){
        product.Size[index] = value
        cacheValueChange(ProductAttrIndexes.Price,"Price",product.Price)
    }

    function updateName(value:string){
        cacheValueChange(ProductAttrIndexes.Name,"Name",value)
    }

    function updateImageUrl(value:string){
        setImageUrl(value) 
        cacheValueChange(ProductAttrIndexes.ImageUrl,"ImageUrl",value)
    }

    function updateDescription(value:string){
        cacheValueChange(ProductAttrIndexes.Description,"Description",value)
    }

    function removeAccessory(id:number){
        product.Price.splice(id)
        product.Size.splice(id)
        setAccessoryList(AccesoryList.filter((item,index) => index!== id))
        cacheValueChange(ProductAttrIndexes.Price,"Price",product.Price)
        cacheValueChange(ProductAttrIndexes.Size,"Size",product.Size)
    }

    function cacheValueChange (index:number,name:string ,value:any){
        changedValues[index] = {name:name,value:value}
        cachedValues[name] = value
    }


    function save(){
        updateProduct({
            categoryId:selectedCategoryId,
            productId:product.Id,
            updatedValues : changedValues 
        },{
            onSuccess: ()=>{dispatch(update({oldProduct:product,updatedValues:changedValues}))},
            onFail : (error) =>{console.log(error)}
        })
    
    }

    return (
        <div className='ProductCreator'>
            <img className='ProductImage' src={ImageUrl}></img>
            <input className='ProductImageField' onChange={(e)=>{updateImageUrl(e.target.value)}} ></input>

            <label className='ProductNameLabel'>Name </label>
            <input className='ProductNameField' onChange={(e)=>updateName(e.target.value)}></input>

            <label className='ProductDescription'></label>
            <input className='ProductDescriptionField' onChange={(e)=>updateDescription(e.target.value)}></input>


            <div className='Accesory'>
                <div className='AccesoryLabels'>
                    <label className='SizeLabel'>Size</label>
                    <label className='PriceLabel'>Price</label>
                </div>
                
                <div className='AccesoryList'>
                    {
                        AccesoryList.map((value:any,index:any)=>{
                            return <Accesory key={index} index={index} remove={removeAccessory} updateSize={updateSize} updatePrice={updatePrice}/>
                        })
                    }
                </div>

                <button className='AddSizeButton' onClick={()=>AddSize()}>Add Size</button>

                <button className='SaveButton' onClick={()=>{save()}}>Save</button>


            </div>
            
           
            
           
        </div>
    )
}