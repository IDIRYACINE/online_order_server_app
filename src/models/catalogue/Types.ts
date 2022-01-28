
export type Category = {
    id : string
    name : string,
    imageUrl : string,
    productCount : number,
    index : number 
}

export type Product = {
    id :string
    name : string ,
    imageUrl : string,
    description : string ,
    prices : Array<number>,
    sizes : Array<string>,
    index : number,
}
