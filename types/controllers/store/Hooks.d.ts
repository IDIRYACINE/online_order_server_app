import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from './Store';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
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
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
