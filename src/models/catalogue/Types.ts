
export type Category = {
    name : string,
    imageUrl : string,
    productCount : number,
    index : number 
}

export type Product = {
    name : string ,
    imageUrl : string,
    description : string ,
    prices : Array<number>,
    sizes : Array<string>,
    index : number,
    selectedSizeIndex : number
}
