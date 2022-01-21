import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks'

export default function CategoryCard(props : any) {
    const category = useAppSelector((state) => state.category.categories[0])

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