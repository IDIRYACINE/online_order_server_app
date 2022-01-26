import { FetchCategoryApi,CreateCategoryApi,UpdateCategoryApi,DeleteCategoryApi } from "./ApiConfig"
import axios from "axios"
import{AuthKey} from '../models/authentication/Authentication'
import { Category } from "../models/catalogue/Types"
import {Store} from '../redux/Store'
import { create, remove, update } from "../redux/reducers/CategoryReducer"
import {IsNotCategoryError} from "../erros/CategoryErros"

type Options = {
    onSuccessCallback() : void,
    onFailCallback():void
}

function handleErros(error:any){
    console.log(error)
}

function isCategory(data:any) : data is Category{
    return (data as Category).name != undefined
}

function handleCategoryCreation(data: any,options:Options){
    console.log(data)
    if(isCategory(data)){
        Store.dispatch(create({category:data}))
        options.onSuccessCallback()
    }
    else{
        options.onFailCallback()
        throw new Error(data)
    }
}

function handleCategoryDeletion(category:Category){
    Store.dispatch(remove({category:category}))
}

function handleCategoryUpdate(data:any,category:Category,newValues:any){
    Store.dispatch(update({oldCategory:category,updatedValues:newValues}))
}

export async function fetchCategory(startIndex:number,endIndex:number,options:Options){
    axios.get(FetchCategoryApi,
        {
        params:{start:startIndex,end:endIndex},
        headers:{"X-Auth-key" : AuthKey}})
        .then(function (response){
        handleCategoryCreation(response.data,options)
    })
    .catch(handleErros)
}

export async function updateCategory(category:Category ,updatedValues:any){
    axios.post(UpdateCategoryApi,
        {id:category.id ,options:updatedValues},
        {headers:{"X-Auth-key" : AuthKey}})
        .then(function(response){
        handleCategoryUpdate(response.data,category,updatedValues)
    }).catch(handleErros)
}

export async function createCategory(category:Category,options:Options){
    axios.post(CreateCategoryApi,{category : category})
    .then(function(response){
        handleCategoryCreation(response.data,options)
    })
    .catch(handleErros)
}

export async function deleteCategory(category:Category){
    axios.post(DeleteCategoryApi,
        {categoryId:category.id},
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(response=>{handleCategoryDeletion(category)})
    .catch(handleErros)
}