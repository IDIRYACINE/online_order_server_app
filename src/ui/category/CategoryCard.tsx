import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCategory } from '../../api/CategoryApi'
import { setSelectedCategoryIndex } from '../../models/state'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'
import { removeCategory, } from '../../redux/reducers/CategoryReducer'

export default function CategoryCard(props : any) {
    const category = useAppSelector((state) => state.category.categories[props.index])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function handleCategoryEdit(){
        setSelectedCategoryIndex(props.index,category.Id)
        navigate("/EditCategory",{replace:true})
    }

    function handleCategoryDeletion(){
        deleteCategory({
            categoryId : category.Id
        },
        {
            onSuccess :()=>{
                dispatch(removeCategory({category:category}))
            },
            onFail : (error)=>{
                console.log(error)
            }
        })
    }

    function handleCategoryExploration(){
        setSelectedCategoryIndex(props.index,category.Id)
        navigate("/Category",{replace:true})
    }

    return (
    <div className='Category'>
        <img className='CategoryImage' src={category.ImageUrl}></img>
        <p className='NameLabel'>{category.Name}</p>
        <p className='ProductsCountLabel'>{category.ProductCount}</p>
        <button className='EditButton' onClick={()=>{handleCategoryEdit()}}>Edit</button>
        <button className='DeleteButton' onClick={()=>{handleCategoryDeletion()}}>Delete</button>
        <button className='ExploreButton' onClick={()=>{handleCategoryExploration()}}>Explore</button>
    </div>
    )

}