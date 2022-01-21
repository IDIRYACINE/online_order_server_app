import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './category/CategoryCard'
import {Category} from '../../models/catalogue/Types'
import '../style/CategoryCard.css'


export default function Catalogue(){
    const [categories , setCategories] = useState([{name:"pizza",productCount:0,imageUrl:'https://thumbs.dreamstime.com/z/pizz-86225620.jpg',index:0}])

    return (
        <div className='Catalogue'>
            <nav>
                <Link to="/Orders">Home</Link>
            </nav>

            {categories.map(element =>{ 
                return <CategoryCard data={element}></CategoryCard>
                })
            }

        </div>
    )
}