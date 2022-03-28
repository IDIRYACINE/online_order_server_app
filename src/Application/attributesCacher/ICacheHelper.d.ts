
export declare interface ICacheHelper{
    cacheAttribute(name : string , value : any) : void,
    getCachedValues() : Attribute[],
    setTargetAttributes(type : string) : void,
    resetCache() : void
}