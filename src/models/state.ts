
export let selectedProductIndex = 0
export function setSelectedProductIndex(index:number){selectedProductIndex = index}

export let selectedCategoryId = ""
export let selectedCategoryIndex = 0
export function setSelectedCategoryIndex(index:number,id:string){
    selectedCategoryIndex = index
    selectedCategoryId = id
}
