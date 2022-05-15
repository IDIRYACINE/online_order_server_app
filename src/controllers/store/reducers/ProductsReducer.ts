
import { createSlice } from "@reduxjs/toolkit";
import { Category, Product } from "../../../data/catalogue/Types";

type ModifiedAction = {payload:{oldProduct:Product,categoryKey:string,updatedValues:any}}
type CreationAction = {payload:{product:Product,categoryKey:string}}
type LoadAction = {payload:{categoryKey:string,products:any}}
type RegisterAction = {payload : {categories:Category[]}}
type ProductsState = Record<string,Record<string,Product>>

const initialState : ProductsState = {}
const productsSlice = createSlice({
    name : 'products',
    initialState ,
    reducers : {
        updateProduct(state,action:ModifiedAction){
            const categoryKey = action.payload.categoryKey
            const productKey =action.payload.oldProduct.Id
         
            state[categoryKey][productKey] = {...action.payload.oldProduct , ...action.payload.updatedValues}
       
        },
        removeProduct(state,action:CreationAction){
            delete state[action.payload.categoryKey][action.payload.product.Index]
        },
        addProduct(state,action:CreationAction){
            const products = state[action.payload.categoryKey]
            products[action.payload.product.Name] = action.payload.product
        },
        loadProduct(state,action:LoadAction){
            const categoryKey = action.payload.categoryKey
            let formatedProducts :any = {}

            action.payload.products.forEach((value:any)=>{
                const price: any = []
                const size :any = []

                try{
                JSON.parse(value.Price,(key,value)=>{
                    price.push(value)
                })}
                catch{}

                try{JSON.parse(value.Size,(key,value)=>{
                    size.push(value)
                })}
                catch{}
                value.Price = price
                value.Size  = size
                formatedProducts[value.Id] = value
                
            })
            state[categoryKey] = formatedProducts
        },
        registerCategory(state,action : RegisterAction){
            action.payload.categories.forEach(value=>{
                state[value.Id] = {}
            })
            
        }

    }
})


export const {addProduct,updateProduct,removeProduct,loadProduct,registerCategory} = productsSlice.actions

export default productsSlice.reducer
