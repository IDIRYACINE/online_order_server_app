
export enum OrderStatus {
    Pending
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
    FullName : string,
    State : OrderStatus,
    PhoneNumber : string,
    Email : string,
    BanStatus : string,
    items : Array<ItemType>,
    Latitude : number,
    Longitude : number,
    Address : string

}
/*
{id : f21,state :Pending,items : []}

*/

