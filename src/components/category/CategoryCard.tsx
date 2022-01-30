import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'
import { useNavigate } from 'react-router-dom'
import { deleteCategory } from '../../api/CategoryApi'
import { setSelectedCategoryIndex } from '../../models/state'
import { useAppDispatch, useAppSelector } from '../../store/Hooks'
import { removeCategory, } from '../../store/reducers/CategoryReducer'
import './CategoryCard.css'

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
        <Card>
            <Card.Img variant="top" src ={category.ImageUrl}/>
            <Card.Text>{category.Name}</Card.Text>
            <Card.Text>{category.ProductCount}</Card.Text>
            <Button variant="primary" onClick={()=>{handleCategoryDeletion()}}>Delete</Button>
            <Button variant="primary" onClick={()=>{handleCategoryEdit()}}>Edit</Button>
            <Button variant="primary" onClick={()=>{handleCategoryExploration()}}>Explore</Button>
        </Card>
   
    )

}