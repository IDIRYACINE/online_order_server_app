
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
    Price : Array<string>,
    Size : Array<string>,
    Index : number,
}

export const CategoryAttrIndexes = {
    Name : 0,
    ImageUrl: 1,
}

export const ProductAttrIndexes = {
    Name : 0 ,
    ImageUrl : 1,
    Description : 2 ,
    Price : 3,
    Size : 4
}
