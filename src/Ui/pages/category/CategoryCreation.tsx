import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate } from 'react-router-dom'
import { createCategory } from '../../../Infrastructure/api/CategoryApi'
import MainElementForm from '../../components/forms/MainElementForm'
import { Category } from '../../../Domain/catalogue/Types'
import '../../styles/Category/CategoryCreation.css'


export default function CategoryCreator(){
    const navigate = useNavigate()
    const[imageUrl , setImageUrl] = useState("https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png")

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
            onFail: ()=>{}
        })
        
    }

    function cancel (){
        navigate("/Catalogue",{replace:true})
    }

    return (
        <Container className='bg-white'>
            <MainElementForm updateImageUrl={setImageUrl} updateName={updateName} updateDescription={updateDescription} save={handleCategoryCreation}
                ImageUrl={imageUrl}
            />
            <Button id='CancelButton' onClick={()=>{cancel()}}>Cancel</Button>

       
        </Container>
            
    )
}