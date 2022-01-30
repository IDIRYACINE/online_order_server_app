import React, { useState } from 'react'
import { createProduct } from '../../api/ProductApi'
import { Product } from '../../models/catalogue/Types'
import { selectedCategoryId } from '../../models/state'
import { useAppDispatch } from '../../store/Hooks'
import { addProduct } from '../../store/reducers/ProductsReducer'

function Accesory(props:any){
    return (
        <div>
            <input className='Size' onChange={e=>props.updateSize(props.index,e.target.value)}></input>
            <input className='Price' onChange={e=>props.updatePrice(props.index,e.target.value)}></input>
            <button className='RemoveAccessory' onClick={()=>{props.remove(props.index)}}>Remove</button>
        </div>
    )

}

export default function ProductCreator(){
    const [ImageUrl , setImageUrl] = useState("")
    const [AccesoryList , setAccessoryList] = useState([0])
    const dispatch = useAppDispatch()

    const product:Product = {
        Id : "",
        Name : "",
        ImageUrl : ImageUrl,
        Description : "",
        Price : [],
        Size : [],
        Index : -1
    }
   
    function AddSize(){
        product.Price.push("")
        product.Size.push("")
        setAccessoryList(AccesoryList.concat([1]))
    }

    function updateSize(index:number,value:string){
        product.Price[index] = value
    }

    function updatePrice(index:number,value:string){
        product.Size[index] = value
    }

    function updateName(value:string){
        product.Name = value
        product.Id = value
    }

    function updateImageUrl(value:string){
        setImageUrl(value) 
        product.ImageUrl=value
    }

    function removeAccessory(id:number){
        product.Price.splice(id)
        product.Size.splice(id)
        setAccessoryList(AccesoryList.filter((item,index) => index!== id))
    }


    function save(){
        createProduct({
            product : product,
            categoryId : selectedCategoryId
        },{
            onSuccess: ()=>{dispatch(addProduct({product:product}))},
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
            <input className='ProductDescriptionField' onChange={(e)=>product.Description = e.target.value}></input>


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