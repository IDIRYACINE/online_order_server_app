import React from 'react'
import {useNavigate } from 'react-router-dom'
import CategoryCard from './category/CategoryCard'
import {useAppSelector } from '../../redux/Hooks'


export default function Catalogue(){
    const categories = useAppSelector(state => state.category.categories)

    const navigate = useNavigate()
    function navigateToCategoryCreation(){
        navigate("/CreateCategory",{replace:true})
    }

    return (
        <div className='Catalogue'>
            <button className='CreateCategoryButton' onClick={()=>{navigateToCategoryCreation()}}>New Category</button>
            {categories.map((element,index) =>{ 
                return <CategoryCard key={index} data={element} index={index}></CategoryCard>
                })
            }

        </div>
    )
}