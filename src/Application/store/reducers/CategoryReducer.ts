
import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../../Domain/catalogue/Types";



type ModifyAction = {payload:{category:Category}}
type UpdateAction = {payload:{oldCategory:Category,updatedValues:any}}
type LoadAction = {payload:{categories:Category[]}}

type CategoriesState = {
    categories : Record<string,Category>
    }

const initialState : CategoriesState = {
    categories : {}
}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    reducers : {
        createCategory(state,action:ModifyAction){
            state.categories[action.payload.category.Id] = action.payload.category
        },
        removeCategory(state,action:ModifyAction){
            delete state.categories[action.payload.category.Id]
        },
        updateCategory(state,action:UpdateAction){
            const newValues = action.payload.updatedValues
            const id = action.payload.oldCategory.Id
            state.categories[id] = {...state.categories[id],...newValues}
        },
        loadCategory(state,action:LoadAction){
            const categories : any = {}
            action.payload.categories.forEach(value=>{
                categories[value.Id] = value
            })

            state.categories = {...state.categories , ...categories}
        }
    }
} )

export const {createCategory,updateCategory,removeCategory,loadCategory} = categorySlice.actions

export default categorySlice.reducer

