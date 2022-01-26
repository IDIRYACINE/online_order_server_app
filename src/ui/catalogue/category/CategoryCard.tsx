import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks'
import { remove, setSelectedCategoryIndex } from '../../../redux/reducers/CategoryReducer'

export default function CategoryCard(props : any) {
    const category = useAppSelector((state) => state.category.categories[props.index])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function handleCategoryEdit(){
        setSelectedCategoryIndex(props.index)
        navigate("/EditCategory",{replace:true})
    }

    function handleCategoryDeletion(){
        dispatch(remove({category:category}))
    }

    function handleCategoryExploration(){
        setSelectedCategoryIndex(props.index)
        navigate("/Category",{replace:true})
    }

    return (
    <div className='Category'>
        <img className='CategoryImage' src={category.imageUrl}></img>
        <p className='NameLabel'>{category.name}</p>
        <p className='ProductsCountLabel'>{category.productCount}</p>
        <button className='EditButton' onClick={()=>{handleCategoryEdit()}}>Edit</button>
        <button className='DeleteButton' onClick={()=>{handleCategoryDeletion()}}>Delete</button>
        <button className='ExploreButton' onClick={()=>{handleCategoryExploration()}}>Explore</button>
    </div>
    )

}