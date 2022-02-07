import { FetchCategoryApi,CreateCategoryApi,UpdateCategoryApi,DeleteCategoryApi, CreateCategoryOptions, FetchOptions, UpdateOptions, DeleteOptions, Callbacks } from "./ApiConfig"
import axios from "axios"
import{AuthKey} from '../../Application/authentication/Authentication'

export async function fetchCategory(options:FetchOptions,callbacks:Callbacks){
    axios.get(FetchCategoryApi,
        {
        params:{...options},
        headers:{"X-Auth-key" : AuthKey}})
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail)
    }

export async function updateCategory(options:UpdateOptions,callbacks:Callbacks){
    axios.post(UpdateCategoryApi,
        {options:options},
        {headers:{"X-Auth-key" : AuthKey}})
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail)
    }

export async function createCategory(options:CreateCategoryOptions,callbacks:Callbacks){
    axios.post(CreateCategoryApi,{options})
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export async function deleteCategory(options:DeleteOptions,callbacks:Callbacks){
    axios.get(DeleteCategoryApi,
        {
            params:{...options},
            headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}