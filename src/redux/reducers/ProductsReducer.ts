
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/catalogue/Types";


interface ProductsState{
    products : Array<Product>
}

const initialState : ProductsState = {
    products : []
}

const productsSlice = createSlice({
    name : 'products',
    initialState ,
    reducers : {
        update(state){},
        remove(state){},
        create(state){},

    }
})


export const {create,update,remove} = productsSlice.actions

export default productsSlice.reducer
