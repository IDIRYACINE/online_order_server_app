
export enum  OrderStatus{
    "Waiting" = "Waiting" , "Confirmed" = "Confirmed" , "onDelivery" = "onDelivery" 
}

export type Coordinates ={
    lat : number,
    lng : number
}

export type ItemType = {
    name : string,
    size : string,
    price : number,
    quantity : number
}/*
{
    id: 'f21',
    FullName: 'idiryacine',
    Email: 'gg',
    PhoneNumber: '05',
    BanStatus: 1,
    Rating: 0,
    NegativeRating: 0,
    Latitude: 145,
    Longitude: 200,
    Address: 'Sonic',
    items: [ [Object] ]
  }*/

export type Order = {
    id : string,
    fullName : string,
    state : OrderStatus,
    phoneNumber : string,
    email : string,
    banStatus : string,
    items : Array<ItemType>,
    latitude : number,
    longitude : number,
    address : string,
    time:number

}

export type OrderState = {
    id: string,
    status:OrderStatus
}

/*
{id : f21,state :Pending,items : []}

*/

