import { Attribute } from "../../utils/api/ApiConfig";
export declare const CacheHelper: {
    cacheAttribute: (name: string, value: any) => void;
    getCachedValues: () => Attribute[];
    setTargetAttributes: (type: string) => void;
    resetCache: () => void;
};
