import {FetchProductApi,CreateProductApi,UpdateProductApi,DeleteProductApi, UpdateOptions, FetchOptions, CreateProductOptions, DeleteOptions, Callbacks } from "./ApiConfig"
import axios from "axios"
import{AuthKey} from '../../controllers/authentication/Authentication'


export async function fetchProduct(options :FetchOptions,callbacks:Callbacks){
    axios.get(
        FetchProductApi,
        {params:{...options},
        headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function updateProduct(options:UpdateOptions,callbacks:Callbacks){
    axios.post(UpdateProductApi,{options:JSON.stringify(options)},
        {
            headers:{
                'Content-Type': 'application/json',
            "X-Auth-key" : AuthKey 
    }})
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function createProduct(options:CreateProductOptions,callbacks:Callbacks){
    axios.post(CreateProductApi,
        {options:options},
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function deleteProduct(options:DeleteOptions,callbacks:Callbacks){
    axios.get(DeleteProductApi,
        {
            params:{...options},
            headers:{"X-Auth-key" : AuthKey
        }
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}