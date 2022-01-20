import React,{useState} from 'react'
import Category from '../../models/catalogue/Category'

export default function CategoryCard(props : any) {
    const[category , setCategory] = useState(new Category(props.data))

    return (
    <div className='Category'>
        <img className='CategoryImage' src={category.imageUrl}></img>
        <p>{category.name}</p>
        <p>{category.productCount}</p>
    </div>)

}