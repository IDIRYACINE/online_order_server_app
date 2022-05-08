import React from 'react'
import {useNavigate } from 'react-router-dom'
import CategoryCard from 'components/category/CategoryCard'
import {Row,Button} from 'react-bootstrap'
import {useAppDispatch, useAppSelector } from 'controllers/store/Hooks'
import { fetchCategory } from 'utils/api/CategoryApi'
import { loadCategory } from 'controllers/store/reducers/CategoryReducer'
import { registerCategory } from 'controllers/store/reducers/ProductsReducer'
import styles from '../../styles/category/Catalogue.module.scss'

export default function Catalogue(){
    const categories = useAppSelector(state => state.category.categories)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function navigateToCategoryCreation(){
        navigate("/CreateCategory",{replace:true})
    }

    

    function loadCategories(){
        fetchCategory({startIndex:"0",count:"5"},
        {
            onSuccess:(response)=>{
                dispatch(loadCategory({categories:response.data}))
                dispatch(registerCategory({categories:response.data}))
            },
            onFail :(error)=>{console.log("failed")}
        })
    }

    return (
        <div className = "catalogue ">
            
            <Row >
                <Button className=" mb-2" onClick={()=>{navigateToCategoryCreation()}}>New Category</Button>
                <Button className=" mb-2" onClick={()=>{loadCategories()}}>Load</Button>
            </Row>

            <Row className="row-cols-3">
            {
                Object.entries(categories).map(([key,value])=>{
                    return <CategoryCard key={key} data={value} id={key}></CategoryCard>
                })
            }
            </Row>


        </div>
    )
}