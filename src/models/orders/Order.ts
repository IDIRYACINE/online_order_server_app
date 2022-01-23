
export enum OrderStatus {
    Pending
}

export type Coordinates ={
    latitude : number,
    longitude : number
}

export type ItemType = {
    name : string,
    price : number,
    quantity : number
}

export type Order = {
    id : string,
    state : OrderStatus,
    items : Array<ItemType>,
    customerName : string,
    address : string,
    coordinations : Coordinates
}

