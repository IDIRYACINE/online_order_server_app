import React, { useState } from 'react'
import {Container,Button,Image,Col,Row,Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createCategory } from 'utils/api/CategoryApi'
import { Category } from 'data/catalogue/Types'
import { AttributeRow } from 'components/forms/Forms'
import styles from '../../styles/category/CategoryCreation.module.scss'

export default function CategoryCreator(){
    const navigate = useNavigate()
    const[imageUrl , updateImageUrl] = useState("https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png")

    let name = 'idir'
    let description = 'none'

    function updateName(value:string){
        name = value
    }

    function updateDescription(value:string){
        description = value
    }


    function handleCategoryCreation() {
        let category : Category = {
            Id:name,
            Name:name,
            Description : description,
            ImageUrl:imageUrl,
            Index:-1,
            ProductCount:0
        }
        createCategory(
            {
                category : category
            },
            {
            onSuccess:()=>{navigate("/Catalogue",{replace:true})},
            onFail: (e)=>{
                console.log(e)
            }
        })
        
    }

    function cancel (){
        navigate("/Catalogue",{replace:true})
    }

    return (
        <Container >
            <Row>
                <Col><Image className={styles['category-image']} src={imageUrl} /></Col>
                <Col>
                <Card className={styles['category-infos']}>
                    <AttributeRow hint='Category Image' label='Image Url' initialValue='' onChange={updateImageUrl}></AttributeRow>
                    <AttributeRow hint='Category Name' label='Name' initialValue='' onChange={updateName}></AttributeRow>
                    <AttributeRow hint='Category Description' label='Description' initialValue='' onChange={updateDescription}></AttributeRow>
                </Card>
                </Col>
               
            </Row>

            <Row className= "pt-4 px-2">
            <Button className="my-1" onClick={()=>{cancel()}}>Cancel</Button>
            <Button className="my-1" onClick={()=>{handleCategoryCreation()}}>Save</Button>

            </Row>
           
        </Container>
    )
}