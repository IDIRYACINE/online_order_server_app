import React from 'react'
import {useNavigate } from 'react-router-dom'
import CategoryCard from '../../components/category/CategoryCard'
import {useAppDispatch, useAppSelector } from '../../store/Hooks'
import { fetchCategory } from '../../api/CategoryApi'
import { loadCategory } from '../../store/reducers/CategoryReducer'
import { registerCategory } from '../../store/reducers/ProductsReducer'


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

            {
                Object.entries(categories).map(([key,value])=>{
                    return <CategoryCard key={key} data={value} id={key}></CategoryCard>
                })
            }

        </div>
    )
}