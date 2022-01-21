
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../models/catalogue/Types";


interface CategoriesState{
    categories : Array<Category>
}

const initialState : CategoriesState = {
    categories : []
}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    reducers : {
        create(state){},
        remove(state){},
        update(state){},
    }
} )

export const {create,update,remove} = categorySlice.actions

export default categorySlice.reducer
