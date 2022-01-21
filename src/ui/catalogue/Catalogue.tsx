import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './category/CategoryCard'
import '../style/CategoryCard.css'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'


export default function Catalogue(){
    const categories = useAppSelector(state => state.category.categories)

    return (
        <div className='Catalogue'>
            <nav>
                <Link to="/Orders">Home</Link>
            </nav>

            {categories.map((element,index) =>{ 
                return <CategoryCard data={element} index={index}></CategoryCard>
                })
            }

        </div>
    )
}