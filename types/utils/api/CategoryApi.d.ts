import { CreateCategoryOptions, FetchOptions, UpdateOptions, DeleteOptions, Callbacks } from "./ApiConfig";
export declare function fetchCategory(options: FetchOptions, callbacks: Callbacks): Promise<void>;
export declare function updateCategory(options: UpdateOptions, callbacks: Callbacks): Promise<void>;
export declare function createCategory(options: CreateCategoryOptions, callbacks: Callbacks): Promise<void>;
export declare function deleteCategory(options: DeleteOptions, callbacks: Callbacks): Promise<void>;
