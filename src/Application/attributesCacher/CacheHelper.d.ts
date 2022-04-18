import { Attribute } from "../../Infrastructure/api/ApiConfig";
export declare const CacheHelper: {
    cacheAttribute: (name: string, value: any) => void;
    getCachedValues: () => Attribute[];
    setTargetAttributes: (type: string) => void;
    resetCache: () => void;
};
