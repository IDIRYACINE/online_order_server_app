import {FetchModes,FetchProductApi,CreateProductApi,UpdateProductApi,DeleteProductApi } from "./ApiConfig"
import axios from "axios"
import{AuthKey} from '../models/authentication/Authentication'
import { Product } from "../models/catalogue/Types"

interface ProductOptions{
    mode : FetchModes,
    id : string,
    startIndex? :number,
    count? :number
}

export async function fetchProduct(categoryId:string ,options :ProductOptions){
    axios.get(FetchProductApi,
        {method:'GET' ,
        data:{category:categoryId,options:options},
        headers:{"X-Auth-key" : AuthKey}
    })
}

export async function updateProduct(ProductId:string ,options:any){
    axios.post(UpdateProductApi,
        {method:'POST' ,
        data:{id:ProductId ,options:options},
        headers:{"X-Auth-key" : AuthKey}
    })
}

export async function createProduct(Product:Product){
    axios.post(CreateProductApi,
        {method:'POST' ,
        data:Product,
        headers:{"X-Auth-key" : AuthKey}
    })
}

export async function deleteProduct(ProductId:string){
    axios.post(DeleteProductApi,
        {method:'POST' ,
        data:{ProductId:ProductId},
        headers:{"X-Auth-key" : AuthKey}
    })
}