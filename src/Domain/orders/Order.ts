
export enum OrderStatus {
    Pending
}

export type Coordinates ={
    lat : number,
    lng : number
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
    coordinations : Coordinates,
    address : string

}
/*
{id : f21,state :Pending,items : []}

*/

