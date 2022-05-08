import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProduct(state, action) {
            const products = state[action.payload.categoryKey];
            const newValues = action.payload.updatedValues;
            const index = action.payload.oldProduct.Index;
            let product = products[index];
            products[index] = { ...product, ...newValues };
        },
        removeProduct(state, action) {
            state[action.payload.categoryKey].splice(action.payload.product.Index);
        },
        addProduct(state, action) {
            const products = state[action.payload.categoryKey];
            action.payload.product.Index = products.length;
            products.push(action.payload.product);
        },
        loadProduct(state, action) {
            const categoryKey = action.payload.categoryKey;
            let length = state[categoryKey].length;
            action.payload.products.forEach((value) => {
                value.Index = length;
                value.Price = JSON.parse(value.Price);
                value.Size = JSON.parse(value.Size);
                length++;
            });
            state[categoryKey] = state[categoryKey].concat(action.payload.products);
        },
        registerCategory(state, action) {
            action.payload.categories.forEach(value => {
                state[value.Id] = [];
            });
        }
    }
});
export const { addProduct, updateProduct, removeProduct, loadProduct, registerCategory } = productsSlice.actions;
export default productsSlice.reducer;
//# sourceMappingURL=ProductsReducer.js.map