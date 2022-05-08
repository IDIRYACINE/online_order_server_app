import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories: {}
};
const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        createCategory(state, action) {
            state.categories[action.payload.category.Id] = action.payload.category;
        },
        removeCategory(state, action) {
            delete state.categories[action.payload.category.Id];
        },
        updateCategory(state, action) {
            const newValues = action.payload.updatedValues;
            const id = action.payload.oldCategory.Id;
            state.categories[id] = { ...state.categories[id], ...newValues };
        },
        loadCategory(state, action) {
            const categories = {};
            action.payload.categories.forEach(value => {
                categories[value.Id] = value;
            });
            state.categories = { ...state.categories, ...categories };
        }
    }
});
export const { createCategory, updateCategory, removeCategory, loadCategory } = categorySlice.actions;
export default categorySlice.reducer;
//# sourceMappingURL=CategoryReducer.js.map