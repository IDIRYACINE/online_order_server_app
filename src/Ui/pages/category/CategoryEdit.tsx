import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Attribute } from '../../../Infrastructure/api/ApiConfig'
import { updateCategory } from '../../../Infrastructure/api/CategoryApi'
import { CategoryAttrIndexes } from '../../../Application/models/catalogue/Types'
import {useAppDispatch,useAppSelector} from '../../../Application/store/Hooks'
import { updateCategory as update } from '../../../Application/store/reducers/CategoryReducer'
import '../../styles/Category/CategoryEdit.css'

const changedValues : Array<Attribute> = []
const cachedValues :any = {}

export default function CategoryEdit(){
    const params = useParams()
    const category  = useAppSelector(state => state.category.categories[params.categoryId!])
    const navigate = useNavigate()

    const[name , setName] = useState(category.Name)
    const[imageUrl , setImageUrl] = useState(category.ImageUrl)

    const dispatch = useAppDispatch()
    
    function saveChanges (){
        updateCategory({
            categoryId : category.Id,
            updatedValues : changedValues
        },{
            onSuccess : ()=>{
                dispatch(update({oldCategory:category,updatedValues:cachedValues}))
                navigate("/Catalogue",{replace:true})
            },
            onFail:()=>{console.log("failed")}
        })
    }

    function cancel (){

    }

    function handleNameChange(value:string){
        cacheValueChange(CategoryAttrIndexes.Name,"Name",value)
        setName(value)
    }

    function handleImageChange(value:string){
        cacheValueChange(CategoryAttrIndexes.ImageUrl,"ImageUrl",value)
        setImageUrl(value)
    }

    function cacheValueChange (index:number,name:string ,value:any){
        changedValues[index] = {name:name,value:value}
        cachedValues[name] = value
    }

    return (
        <div className='CategoryEdit'>

            <div className='Image'>
                <img src={imageUrl} id='CategoryImage'></img>
                <input id='CategoryImageUrl' value={imageUrl} onChange={e=>{handleImageChange(e.target.value)}}></input>
            </div>

            <div className='CategoryInfos'>
                
                <p id="CategoryNameLabel">Category Name</p>
                <input id="CategoryName" value={name} onChange={e=>{handleNameChange(e.target.value)}}></input>

                <p id="CategoryDescriptionLabel">Description</p>
                <input id="CategoryDescription"></input>
            </div>

            <div className='Actions'>
                <button id='SaveButton' onClick={()=>{saveChanges()}}>Save</button>

                <button id='CancelButton' onClick={()=>{cancel()}}>Cancel</button>
            </div>
        </div>
    )
}