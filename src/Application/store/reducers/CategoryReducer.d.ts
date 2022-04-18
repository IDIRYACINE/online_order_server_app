import { Category } from "../../../Domain/catalogue/Types";
declare type CategoriesState = {
    categories: Record<string, Category>;
};
export declare const createCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    category: Category;
}, string>, updateCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    oldCategory: Category;
    updatedValues: any;
}, string>, removeCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    category: Category;
}, string>, loadCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    categories: Category[];
}, string>;
declare const _default: import("redux").Reducer<CategoriesState, import("redux").AnyAction>;
export default _default;
