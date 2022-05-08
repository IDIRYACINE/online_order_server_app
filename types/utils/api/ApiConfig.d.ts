import { Category, Product } from "../../data/catalogue/Types";
export declare const Host = "http://localhost:3001/";
export declare const FetchCategoryApi: string;
export declare const UpdateCategoryApi: string;
export declare const CreateCategoryApi: string;
export declare const DeleteCategoryApi: string;
export declare const FetchProductApi: string;
export declare const UpdateProductApi: string;
export declare const DeleteProductApi: string;
export declare const CreateProductApi: string;
export declare const FetchCustomerApi: string;
export declare const FetchCustomerExtrasApi: string;
export declare const SynchroniseDatabaseApi: string;
export declare type FetchOptions = {
    startIndex: string;
    count: string;
    categoryId?: string;
};
export declare type DeleteOptions = {
    categoryId: string;
    productId?: string;
};
export declare type Attribute = {
    name: string;
    value: any;
};
export declare type AttributeMap = {};
export declare type UpdateOptions = {
    categoryId: string;
    productId?: string;
    updatedValues: Attribute[];
};
export declare type CreateProductOptions = {
    product: Product;
    categoryId: string;
};
export declare type CreateCategoryOptions = {
    category: Category;
};
export declare type Callbacks = {
    onSuccess(response?: any): void;
    onFail(error?: any): void;
};
