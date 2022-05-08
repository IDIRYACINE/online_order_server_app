import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    orders: {}
};
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        update(state, action) {
        },
        remove(state, action) {
            delete state.orders[action.payload];
        },
        add(state, action) {
            state.orders[action.payload.id] = action.payload;
        },
        registerExtras(state, action) {
            const id = action.payload.id;
            const oldOrder = state.orders[id];
            state.orders[id] = { ...oldOrder, ...action.payload };
        },
        loadOrders(state, action) {
            state.orders = action.payload;
        }
    }
});
export const { update, remove, add, loadOrders, registerExtras } = ordersSlice.actions;
export default ordersSlice.reducer;
//# sourceMappingURL=OrdersReducer.js.map