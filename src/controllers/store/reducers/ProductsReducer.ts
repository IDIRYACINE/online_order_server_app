
import { createSlice } from "@reduxjs/toolkit";
import { Category, Product } from "../../../data/catalogue/Types";

type ModifiedAction = {payload:{oldProduct:Product,categoryKey:string,updatedValues:any}}
type CreationAction = {payload:{product:Product,categoryKey:string}}
type LoadAction = {payload:{categoryKey:string,products:any}}
type RegisterAction = {payload : {categories:Category[]}}
type ProductsState = Record<string,Array<Product>>

const initialState : ProductsState = {}
const productsSlice = createSlice({
    name : 'products',
    initialState ,
    reducers : {
        updateProduct(state,action:ModifiedAction){
            const products = state[action.payload.categoryKey]
            const newValues = action.payload.updatedValues
            const index = action.payload.oldProduct.Index
            let product = products[index]
            products[index] = {...product,...newValues}
        },
        removeProduct(state,action:CreationAction){
            state[action.payload.categoryKey].splice(action.payload.product.Index)
        },
        addProduct(state,action:CreationAction){
            const products = state[action.payload.categoryKey]
            action.payload.product.Index = products.length
            products.push(action.payload.product)
        },
        loadProduct(state,action:LoadAction){
            const categoryKey = action.payload.categoryKey
            let length = state[categoryKey].length
            action.payload.products.forEach((value:any)=>{
                value.Index = length
                value.Price = JSON.parse(value.Price)
                value.Size = JSON.parse(value.Size)
                length++
            })
            state[categoryKey] = state[categoryKey].concat(action.payload.products)
        },
        registerCategory(state,action : RegisterAction){
            action.payload.categories.forEach(value=>{
                state[value.Id] = []
            })
            
        }

    }
})


export const {addProduct,updateProduct,removeProduct,loadProduct,registerCategory} = productsSlice.actions

export default productsSlice.reducer
