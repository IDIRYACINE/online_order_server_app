import {FetchProductApi,CreateProductApi,UpdateProductApi,DeleteProductApi, UpdateOptions, FetchOptions, CreateProductOptions, DeleteOptions } from "./ApiConfig"
import axios from "axios"
import{AuthKey} from '../models/authentication/Authentication'
import { Product } from "../models/catalogue/Types"
import { Store } from "../redux/Store"
import { create, remove, update } from "../redux/reducers/ProductsReducer"

function handleProductCreation(product:Product){
    Store.dispatch(create({product:product}))
}

function handleProductUpdate(product:Product,newValues:any,categoryId:string){
    Store.dispatch(update({oldProduct:product,updatedValues:newValues}))
}

function handleProductDeletion(product:Product,categoryId:string){
    Store.dispatch(remove({product:product}))
}

function handleError(){
    console.log("error")
}

export async function fetchProduct(options :FetchOptions){
    axios.get(
        FetchProductApi,
        {params:{...options},
        headers:{"X-Auth-key" : AuthKey}
    })
    .then(response =>{
        handleProductCreation(response.data)
    })
    .catch(handleError)
}

export async function updateProduct(product:Product ,options:UpdateOptions){
    axios.post(UpdateProductApi,
        options,
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(response=>{
        handleProductUpdate(product,options.updatedValues,options.categoryId)
    })
    .catch(handleError)
}

export async function createProduct(product:Product ,options:CreateProductOptions){
    axios.post(CreateProductApi,
        options,
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(response=>{
        handleProductCreation(product)
    })
    .catch(handleError)
}

export async function deleteProduct(product:Product,options:DeleteOptions){
    axios.post(DeleteProductApi,
        options,
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(response=>{handleProductDeletion(product,options.categoryId)})
    .catch(handleError)
}