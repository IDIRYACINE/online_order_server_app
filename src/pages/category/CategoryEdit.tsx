import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateCategory } from 'utils/api/CategoryApi'
import {useAppDispatch,useAppSelector} from 'controllers/store/Hooks'
import { updateCategory as update } from 'controllers/store/reducers/CategoryReducer'
import { CacheHelper } from 'controllers/attributesCacher/CacheHelper'
import {Container,Button,Image,Col,Row,Card} from 'react-bootstrap'
import { AttributeRow } from 'components/forms/Forms'
import styles from '../../styles/category/CategoryEdit.module.scss'

export default function CategoryEdit(){
    const params = useParams()
    const category  = useAppSelector(state => state.category.categories[params.categoryId!])
    const navigate = useNavigate()

    const[name , setName] = useState(category.Name)
    const[imageUrl , setImageUrl] = useState(category.ImageUrl)

    const dispatch = useAppDispatch()
    
    function saveChanges (){
        updateCategory({
            categoryId : category.Id,
            updatedValues : CacheHelper.getCachedValues()
        },{
            onSuccess : ()=>{
                dispatch(update({oldCategory:category,updatedValues:CacheHelper.getCachedValues()}))
                CacheHelper.resetCache()
                navigate("/Catalogue",{replace:true})
            },
            onFail:()=>{
                CacheHelper.resetCache()
                console.log("failed")
        }
        })
    }

    function cancel (){
        navigate("/Catalogue",{replace:true})
    }

    function handleNameChange(value:string){
        CacheHelper.cacheAttribute("Name",value)
        setName(value)
    }

    function handleImageChange(value:string){
        CacheHelper.cacheAttribute("ImageUrl",value)
        setImageUrl(value)
    }


    return (
        <Container >
            <Row>
                <Col><Image className={styles['category-image']} src={imageUrl} /></Col>
                <Col>
                <Card className={styles['category-infos']}>
                    <AttributeRow hint='Category Image' label='Image Url' initialValue={imageUrl} onChange={handleImageChange}></AttributeRow>
                    <AttributeRow hint='Category Name' label='Name' initialValue={name} onChange={handleNameChange}></AttributeRow>
                    <AttributeRow hint='Category Description' label='Description' initialValue='' onChange={(value)=>{}}></AttributeRow>
                </Card>
                </Col>
               
            </Row>

            <Row className= "pt-4 px-2">
            <Button className="my-1" onClick={()=>{cancel()}}>Cancel</Button>
            <Button className="my-1" onClick={()=>{saveChanges()}}>Save</Button>

            </Row>
           
        </Container>
    )
}