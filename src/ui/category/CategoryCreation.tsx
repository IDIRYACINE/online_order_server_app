import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCategory } from '../../api/CategoryApi'
import { Category } from '../../models/catalogue/Types'
import '../../styles/Category/CategoryCreation.css'


export default function CategoryCreator(){
    const navigate = useNavigate()

    const[description , setDescription] = useState("")
    const[name , setName] = useState("idir")
    const[imageUrl , setImageUrl] = useState("https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png")

    let handleCategoryCreation = ()=> {
        let category : Category = {
            Id:name,
            Name:name,
            ImageUrl:imageUrl,
            Index:-1,
            ProductCount:0
        }
        createCategory(
            {
                category : category
            },
            {
            onSuccess:()=>{navigate("/Catalogue",{replace:true})},
            onFail: ()=>{}
        })
        
    }

    let cancel = ()=>{
        navigate("/Catalogue",{replace:true})
    }

    return (
        <div className='CategoryCreation'>

            <div className='Image'>
                <img src={imageUrl} id='CategoryImage'></img>
                <input id='CategoryImageUrl' value={imageUrl} onChange={e=>{setImageUrl(e.target.value)}}></input>
            </div>

            <div className='CategoryInfos'>
                
                <p id="CategoryNameLabel">Category Name</p>
                <input id="CategoryName" value={name} onChange={e=>{setName(e.target.value)}}></input>

                <p id="CategoryDescriptionLabel">Description</p>
                <input id="CategoryDescription"></input>
            </div>

            <div className='Actions'>
                <button id='SaveButton' onClick={()=>{handleCategoryCreation()}}>Save</button>

                <button id='CancelButton' onClick={()=>{cancel()}}>Cancel</button>
            </div>
        </div>
    )
}