
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../models/catalogue/Types";


interface CategoriesState{
    categories : Array<Category>
}

type ModifyAction = {payload:{category:Category}}
type UpdateAction = {payload:{oldCategory:Category,updatedValues:any}}

const initialState : CategoriesState = {
    categories : []
}

export let editedCategoryIndex = 0
export function setSelectedCategoryIndex(index:number){editedCategoryIndex = index}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    reducers : {
        create(state,action:ModifyAction){
            action.payload.category.index = state.categories.length 
            state.categories.push(action.payload.category)
        },
        remove(state,action:ModifyAction){
            state.categories.splice(action.payload.category.index)
        },
        update(state,action:UpdateAction){
            const newValues = action.payload.updatedValues
            const index = action.payload.oldCategory.index
            let category = state.categories[index]
            state.categories[index] = {...category,...newValues}
        },
    }
} )

export const {create,update,remove} = categorySlice.actions

export default categorySlice.reducer

