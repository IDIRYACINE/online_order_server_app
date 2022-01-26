import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAppDispatch,useAppSelector} from '../../../redux/Hooks'
import {editedCategoryIndex, update } from '../../../redux/reducers/CategoryReducer'
import './CategoryEdit.css'

const changedValues : any = {}

export default function CategoryEdit(){
    const category  = useAppSelector(state => state.category.categories[editedCategoryIndex])
    const navigate = useNavigate()

    const[name , setName] = useState(category.name)
    const[imageUrl , setImageUrl] = useState(category.imageUrl)

    const dispatch = useAppDispatch()
    
    function saveChanges (){
       dispatch(update({oldCategory:category,updatedValues:changedValues}))
       navigate("/Catalogue",{replace:true})
    }

    function cancel (){

    }

    function handleNameChange(value:string){
        cacheValueChange("name",value)
        setName(value)
    }

    function handleImageChange(value:string){
        cacheValueChange("imageUrl",value)
        setImageUrl(value)
    }

    function cacheValueChange (name:string ,value:any){
        changedValues[name] = value
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