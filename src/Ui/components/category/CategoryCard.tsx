import React from 'react'
import {Card,Col,Image,Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteCategory } from '../../../Infrastructure/api/CategoryApi'
import { useAppDispatch, useAppSelector } from '../../../Application/store/Hooks'
import { removeCategory, } from '../../../Application/store/reducers/CategoryReducer'
import styles from '../../../Ui/styles/Category/CategoryCard.module.scss'

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
        <Card className={styles['category-card'] }>
            <Image className={styles['category-image']} src ={category.ImageUrl}/>
            <h3 className="fw-bold py-2 ">{category.Name}</h3>
            <Card.Subtitle>{category.ProductCount}</Card.Subtitle>
           

            <Card.Body className="px-5">
            <Row>
                <Col><button className="btn btn-link" onClick={()=>{handleCategoryDeletion()}}>Delete</button></Col>
                <Col ><button className="btn btn-link" onClick={()=>{handleCategoryEdit()}}>Edit</button></Col>
                <Col ><button className="btn btn-link" onClick={()=>{handleCategoryExploration()}}>Explore</button></Col>
            </Row>
            </Card.Body>
        </Card>
   
    )

}