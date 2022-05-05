import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { useNavigate } from 'react-router-dom'
import { deleteCategory } from 'utils/api/CategoryApi'
import { useAppDispatch, useAppSelector } from 'utils/store/Hooks'
import { removeCategory, } from 'utils/store/reducers/CategoryReducer'

export default function CategoryCard(props : any) {
    const category = useAppSelector(state => state.category.categories[props.id])    
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    function handleCategoryEdit(){
        navigate(`/EditCategory/${props.id}`,{replace:true})
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
        navigate(`/Category/${props.id}`,{replace:true})
    }

    return (
        <Card className="py-5 px-5">
            <Card.Img variant="top" src ={category.ImageUrl}/>
            <Card.Text>{category.Name}</Card.Text>
            <Card.Text>{category.ProductCount}</Card.Text>
            <Row className="g-3">
                <Col className="col-sm"><Button variant="primary" onClick={()=>{handleCategoryDeletion()}}>Delete</Button></Col>
                <Col className="col-sm"><Button variant="primary" onClick={()=>{handleCategoryEdit()}}>Edit</Button></Col>
                <Col className="col-sm"><Button variant="primary" onClick={()=>{handleCategoryExploration()}}>Explore</Button></Col>
            </Row>
        </Card>
   
    )

}