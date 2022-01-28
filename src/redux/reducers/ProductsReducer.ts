
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/catalogue/Types";
import { selectedCategoryIndex } from "../../models/state";

type ModifiedAction = {payload:{oldProduct:Product,updatedValues:any}}
type CreationAction = {payload:{product:Product}}

type ProductsState = Record<string,Array<Product>>

const initialState : ProductsState = {}
const productsSlice = createSlice({
    name : 'products',
    initialState ,
    reducers : {
        update(state,action:ModifiedAction){
            const products = state[selectedCategoryIndex]
            const newValues = action.payload.updatedValues
            const index = action.payload.oldProduct.Index
            let product = products[index]
            products[index] = {...product,...newValues}
        },
        remove(state,action:CreationAction){
            state[selectedCategoryIndex].splice(action.payload.product.Index)
        },
        create(state,action:CreationAction){
            const products = state[selectedCategoryIndex]
            action.payload.product.Index = products.length
            products.push(action.payload.product)
        },

    }
})


export const {create,update,remove} = productsSlice.actions

export default productsSlice.reducer
