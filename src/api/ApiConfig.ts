import { Category, Product } from "../models/catalogue/Types"


export const Host = 'http://localhost:3001'

export const FetchCategoryApi:string = Host+'/FetchCategory'
export const UpdateCategoryApi:string = Host+'/UpdateCategory'
export const CreateCategoryApi:string = Host+'/CreateCategory'
export const DeleteCategoryApi:string = Host+'/DeleteCategory'

export const FetchProductApi:string = Host+'/FetchProduct'
export const UpdateProductApi:string = Host+'/UpdateProduct'
export const DeleteProductApi:string = Host+'/DeleteProduct'
export const CreateProductApi:string = Host+'/CreateProduct'

export enum FetchModes{Single,Multi}

export type FetchOptions = {
    startIndex : string,
    count : string,
    categoryId?:string
}

export type DeleteOptions = {
    categoryId : string,
    productId? : string
}

export type Attribute = {
    name :string,
    value : any
}

export type UpdateOptions = {
    categoryId : string,
    productId? : string,
    updatedValues : Attribute[]
}

export type CreateProductOptions = {
    product:Product,
    categoryId:string
}

export type CreateCategoryOptions = {
    category :Category
}
