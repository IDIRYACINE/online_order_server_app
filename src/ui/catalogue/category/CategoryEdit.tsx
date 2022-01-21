import React,{useState} from 'react'
import { Category } from '../../../models/catalogue/Types'

export default function CategoryEdit(props:Category){
    
    const[category , setCategory] = useState(props)

    let tempCategory : any

    let SaveChanges = ()=> {
        
    }

    let GoBack = ()=>{

    }

    let CacheChange = (name:string ,value:any)=>{
        tempCategory[name] = value
    }

    let ReloadCategoryImage = (name:string,value:any)=>{
        CacheChange(name , value)
        setCategory({name : category.name , productCount: category.productCount , imageUrl:value , index:category.index})
    }

    return (
        <div className='CategoryEdit'>

            <div className='Image'>
                <img src={category.imageUrl} id='CategoryImage'></img>
                <input id='CategoryImageUrl' value={category.imageUrl} onChange={e=>{ReloadCategoryImage('imageUrl',e.target.value)}}>Url</input>
            </div>

            <div className='CategoryInfos'>
                
                <p id="CategoryNameLabel">Category Name</p>
                <input id="CategoryName" value={category.name} onChange={e=>{CacheChange('name',e.target.value)}}></input>

                <p id="CategoryDescriptionLabel">Description</p>
                <input id="CategoryDescription"></input>
            </div>

            <div className='Actions'>
                <button id='SaveButton' onClick={()=>{SaveChanges()}}>Save</button>

                <button id='CancelButton' onClick={()=>{GoBack()}}>Cancel</button>
            </div>
        </div>
    )
}