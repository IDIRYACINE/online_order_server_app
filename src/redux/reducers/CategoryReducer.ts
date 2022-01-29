
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../models/catalogue/Types";


interface CategoriesState{
    categories : Array<Category>
}

type ModifyAction = {payload:{category:Category}}
type UpdateAction = {payload:{oldCategory:Category,updatedValues:any}}
type LoadAction = {payload:{categories:Category[]}}

const initialState : CategoriesState = {
    categories : []
}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    reducers : {
        createCategory(state,action:ModifyAction){
            action.payload.category.Index = state.categories.length 
            state.categories.push(action.payload.category)
        },
        removeCategory(state,action:ModifyAction){
            state.categories.splice(action.payload.category.Index)
        },
        updateCategory(state,action:UpdateAction){
            const newValues = action.payload.updatedValues
            const index = action.payload.oldCategory.Index
            state.categories[index] = {...state.categories[index],...newValues}
        },
        loadCategory(state,action:LoadAction){
            let length = state.categories.length
            action.payload.categories.forEach(value=>{
                value.Index = length
                length++
            })
            state.categories = state.categories.concat(action.payload.categories)

        }
    }
} )

export const {createCategory,updateCategory,removeCategory,loadCategory} = categorySlice.actions

export default categorySlice.reducer

