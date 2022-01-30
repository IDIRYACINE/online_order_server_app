import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './reducers/CategoryReducer'
import OrdersReducer from './reducers/OrdersReducer'
import ProductsReducer from './reducers/ProductsReducer'

export const Store = configureStore({
  reducer: {
    product : ProductsReducer,
    category : CategoryReducer,
    order : OrdersReducer,
  },
})

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch