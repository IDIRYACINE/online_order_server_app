import { Attribute } from "../../utils/api/ApiConfig"

let targetAttribute = 'Category'
let attributesIndex = 0 
let cachedAttributes : Array<Attribute> = []

let attributesList : any = {
    'Category' : {
        'Name' : {Set:false , Index : -1},
        'ImageUrl': {Set:false , Index : -1},
    },
    'Product' : {
        'Name' : {Set:false , Index : -1} ,
        'ImageUrl' : {Set:false , Index : -1},
        'Description' : {Set:false , Index : -1} ,
        'Price' : {Set:false , Index : -1},
        'Size' : {Set:false , Index : -1}
    }
}

function cacheAttribute(name:string , value:any , index:number){
    cachedAttributes[index] = {'name' : name , 'value' : value}
}


export const CacheHelper  = {
    cacheAttribute: (name: string, value: any) => {
        let attribute = attributesList[targetAttribute][name]
        if(attribute.Set === false){
            attribute.Index = attributesIndex
            attributesIndex++
            attribute.Set = true
        }
        cacheAttribute(name,value,attribute.Index)
    },
    getCachedValues: () => {
        return [...cachedAttributes]
    },
    setTargetAttributes:(type: string)=> {
        targetAttribute = type
    },
    resetCache : () => {
        cachedAttributes = []
        attributesIndex = 0
        attributesList = {
            'Category' : {
                'Name' : {Set:false , Index : -1},
                'ImageUrl': {Set:false , Index : -1},
            },
            'Product' : {
                'Name' : {Set:false , Index : -1} ,
                'ImageUrl' : {Set:false , Index : -1},
                'Description' : {Set:false , Index : -1} ,
                'Price' : {Set:false , Index : -1},
                'Size' : {Set:false , Index : -1}
            }
    }
    }
}