import {FetchProductApi,CreateProductApi,UpdateProductApi,DeleteProductApi, UpdateOptions, FetchOptions, CreateProductOptions, DeleteOptions, Callbacks } from "./ApiConfig"
import axios from "axios"
import{AuthKey} from '../models/authentication/Authentication'
import { Product } from "../models/catalogue/Types"


export async function fetchProduct(options :FetchOptions,callbacks:Callbacks){
    axios.get(
        FetchProductApi,
        {params:{...options},
        headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function updateProduct(product:Product ,options:UpdateOptions,callbacks:Callbacks){
    axios.post(UpdateProductApi,
        options,
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function createProduct(product:Product ,options:CreateProductOptions,callbacks:Callbacks){
    axios.post(CreateProductApi,
        options,
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function deleteProduct(product:Product,options:DeleteOptions,callbacks:Callbacks){
    axios.post(DeleteProductApi,
        options,
        {headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}