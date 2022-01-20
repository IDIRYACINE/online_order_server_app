
class Category {
    
    #name : string
    #imageUrl : string
    #productCount : number

    constructor(props : any){
        this.#name = props.name
        this.#imageUrl = props.imageUrl
        this.#productCount = props.productCount
    }

    get name(){
        return this.#name
    }

    get imageUrl(){
        return this.#imageUrl
    }

    get productCount(){
        return this.#productCount
    }

}

export default Category