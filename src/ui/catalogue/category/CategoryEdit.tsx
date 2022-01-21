import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks'

export default function CategoryEdit(){
    
    const category  = useAppSelector(state => state.category.categories[0])

    let tempCategory : any

    let SaveChanges = ()=> {
        Object.entries(tempCategory).forEach(
            ([key, value]) => {

            }
        );
    }

    let GoBack = ()=>{

    }

    let CacheChange = (name:string ,value:any)=>{
        tempCategory[name] = value
    }

    let ReloadCategoryImage = (name:string,value:any)=>{
        CacheChange(name , value)
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