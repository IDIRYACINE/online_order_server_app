import React,{useState} from 'react'
import {Category} from '../../../models/catalogue/Types'

export default function CategoryCard(props : any) {
    const[category , setCategory] = useState(props.data)

    return (
    <div className='Category'>
        <img className='CategoryImage' src={category.imageUrl}></img>
        <p className='NameLabel'>{category.name}</p>
        <p className='ProductsCountLabel'>{category.productCount}</p>
        <button className='EditButton'>Edit</button>
        <button className='DeleteButton'>Delete</button>
        <button className='ExploreButton'>Explore</button>
    </div>
    )

}