
export type Category = {
    Id : string
    Name : string,
    ImageUrl : string,
    ProductCount : number,
    Index : number 
}

export type Product = {
    Id :string
    Name : string ,
    ImageUrl : string,
    Description : string ,
    Prices : Array<number>,
    Sizes : Array<string>,
    Index : number,
}

export const CategoryAttrIndexes = {
    Name : 0,
    ImageUrl: 1,
}
