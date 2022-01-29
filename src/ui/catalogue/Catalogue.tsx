import React from 'react'
import {useNavigate } from 'react-router-dom'
import CategoryCard from '../category/CategoryCard'
import {useAppDispatch, useAppSelector } from '../../redux/Hooks'
import { fetchCategory } from '../../api/CategoryApi'
import { loadCategory } from '../../redux/reducers/CategoryReducer'
import { registerCategory } from '../../redux/reducers/ProductsReducer'


export default function Catalogue(){
    const categories = useAppSelector(state => state.category.categories)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function navigateToCategoryCreation(){
        navigate("/CreateCategory",{replace:true})
    }

    function loadCategories(){
        fetchCategory({startIndex:"0",count:"2"},
        {
            onSuccess:(response)=>{
                dispatch(loadCategory({categories:response.data}))
                dispatch(registerCategory({categories:response.data}))
            },
            onFail :(error)=>{console.log("failed")}
        })
    }

    return (
        <div className='Catalogue'>
            <button className='CreateCategoryButton' onClick={()=>{navigateToCategoryCreation()}}>New Category</button>
            <button className='CreateCategoryButton' onClick={()=>{loadCategories()}}>Load Categories</button>
            
            {categories.map((element,index) =>{ 
                return <CategoryCard key={index} data={element} index={index}></CategoryCard>
                })
            }

        </div>
    )
}