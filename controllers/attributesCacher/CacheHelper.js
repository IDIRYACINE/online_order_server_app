let targetAttribute = 'Category';
let attributesIndex = 0;
let cachedAttributes = [];
let attributesList = {
    'Category': {
        'Name': { Set: false, Index: -1 },
        'ImageUrl': { Set: false, Index: -1 },
    },
    'Product': {
        'Name': { Set: false, Index: -1 },
        'ImageUrl': { Set: false, Index: -1 },
        'Description': { Set: false, Index: -1 },
        'Price': { Set: false, Index: -1 },
        'Size': { Set: false, Index: -1 }
    }
};
function cacheAttribute(name, value, index) {
    cachedAttributes[index] = { 'name': name, 'value': value };
}
export const CacheHelper = {
    cacheAttribute: (name, value) => {
        let attribute = attributesList[targetAttribute][name];
        if (attribute.Set === false) {
            attribute.Index = attributesIndex;
            attributesIndex++;
            attribute.Set = true;
        }
        cacheAttribute(name, value, attribute.Index);
    },
    getCachedValues: () => {
        return [...cachedAttributes];
    },
    setTargetAttributes: (type) => {
        targetAttribute = type;
    },
    resetCache: () => {
        cachedAttributes = [];
        attributesIndex = 0;
        attributesList = {
            'Category': {
                'Name': { Set: false, Index: -1 },
                'ImageUrl': { Set: false, Index: -1 },
            },
            'Product': {
                'Name': { Set: false, Index: -1 },
                'ImageUrl': { Set: false, Index: -1 },
                'Description': { Set: false, Index: -1 },
                'Price': { Set: false, Index: -1 },
                'Size': { Set: false, Index: -1 }
            }
        };
    }
};
//# sourceMappingURL=CacheHelper.js.map