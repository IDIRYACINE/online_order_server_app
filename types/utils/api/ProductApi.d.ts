import { UpdateOptions, FetchOptions, CreateProductOptions, DeleteOptions, Callbacks } from "./ApiConfig";
export declare function fetchProduct(options: FetchOptions, callbacks: Callbacks): Promise<void>;
export declare function updateProduct(options: UpdateOptions, callbacks: Callbacks): Promise<void>;
export declare function createProduct(options: CreateProductOptions, callbacks: Callbacks): Promise<void>;
export declare function deleteProduct(options: DeleteOptions, callbacks: Callbacks): Promise<void>;
