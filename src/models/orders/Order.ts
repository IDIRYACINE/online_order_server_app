
export enum OrderStatus {
    Pending
}

export type Coordinates ={
    latitude : number,
    longitude : number,
    addresse : string
}

export type ItemType = {
    name : string,
    price : number,
    quantity : number
}

export type Order = {
    id : string,
    customerName : string,
    state : OrderStatus,
    phoneNumber : string,
    email : string,
    banStatus : string,
    items : Array<ItemType>,
    coordinations : Coordinates
}
/*
{id : f21,state :Pending,items : []}

*/

