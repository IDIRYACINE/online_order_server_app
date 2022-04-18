import { Category, Product } from "../../../Domain/catalogue/Types";
declare type ProductsState = Record<string, Array<Product>>;
export declare const addProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    product: Product;
    categoryKey: string;
}, string>, updateProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    oldProduct: Product;
    categoryKey: string;
    updatedValues: any;
}, string>, removeProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    product: Product;
    categoryKey: string;
}, string>, loadProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    categoryKey: string;
    products: any;
}, string>, registerCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    categories: Category[];
}, string>;
declare const _default: import("redux").Reducer<ProductsState, import("redux").AnyAction>;
export default _default;
