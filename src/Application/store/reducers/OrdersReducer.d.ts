import { Order } from "../../../Domain/orders/Order";
declare type OrderStatus = Order & {
    loaded: Boolean;
};
declare type OrdersState = {
    orders: Record<string, OrderStatus>;
};
export declare const update: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, remove: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, add: import("@reduxjs/toolkit").ActionCreatorWithPayload<OrderStatus, string>, loadOrders: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, registerExtras: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    Address: string;
    Rating: string;
    NegativeRating: string;
    Latitude: number;
    Longitude: number;
}, string>;
declare const _default: import("redux").Reducer<OrdersState, import("redux").AnyAction>;
export default _default;
