export declare enum OrderStatus {
    "Pending" = "Pending",
    "Cooking" = "Cooking",
    "Delivery" = "Delivery"
}
export declare type Coordinates = {
    lat: number;
    lng: number;
};
export declare type ItemType = {
    name: string;
    size: string;
    price: number;
    quantity: number;
};
export declare type Order = {
    id: string;
    FullName: string;
    State: OrderStatus;
    PhoneNumber: string;
    Email: string;
    BanStatus: string;
    items: Array<ItemType>;
    Latitude: number;
    Longitude: number;
    Address: string;
};
