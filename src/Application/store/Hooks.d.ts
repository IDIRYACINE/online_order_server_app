import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from './Store';
export declare const useAppDispatch: () => import("redux").Dispatch<import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<{
    product: {
        [x: string]: import("../../Domain/catalogue/Types").Product[];
    };
    category: {
        categories: Record<string, import("../../Domain/catalogue/Types").Category>;
    };
    order: {
        orders: Record<string, import("../../Domain/orders/Order").Order & {
            loaded: Boolean;
        }>;
    };
}, null, import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<{
    product: {
        [x: string]: import("../../Domain/catalogue/Types").Product[];
    };
    category: {
        categories: Record<string, import("../../Domain/catalogue/Types").Category>;
    };
    order: {
        orders: Record<string, import("../../Domain/orders/Order").Order & {
            loaded: Boolean;
        }>;
    };
}, undefined, import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
