export declare type Category = {
    Id: string;
    Name: string;
    ImageUrl: string;
    ProductCount: number;
    Index: number;
};
export declare type Product = {
    Id: string;
    Name: string;
    ImageUrl: string;
    Description: string;
    Price: Array<string>;
    Size: Array<string>;
    Index: number;
};
export declare const CategoryAttrIndexes: {
    Name: number;
    ImageUrl: number;
};
export declare const ProductAttrIndexes: {
    Name: number;
    ImageUrl: number;
    Description: number;
    Price: number;
    Size: number;
};
