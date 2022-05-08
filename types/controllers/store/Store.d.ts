export declare const Store: import("@reduxjs/toolkit").EnhancedStore<{
    product: {
        [x: string]: import("../../data/catalogue/Types").Product[];
    };
    category: {
        categories: Record<string, import("../../data/catalogue/Types").Category>;
    };
    order: {
        orders: Record<string, import("../../data/orders/Order").Order & {
            loaded: Boolean;
        }>;
    };
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    product: {
        [x: string]: import("../../data/catalogue/Types").Product[];
    };
    category: {
        categories: Record<string, import("../../data/catalogue/Types").Category>;
    };
    order: {
        orders: Record<string, import("../../data/orders/Order").Order & {
            loaded: Boolean;
        }>;
    };
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof Store.getState>;
export declare type AppDispatch = typeof Store.dispatch;
