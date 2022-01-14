import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Catalogue(){
    return (
        <div className='Catalogue'>
            <nav>
                <Link to="/Orders">Home</Link>
            </nav>
        </div>
    )
}