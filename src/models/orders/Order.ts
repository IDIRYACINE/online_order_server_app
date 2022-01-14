
export enum OrderStatus {

}

export type Coordinates ={
    latitude : number,
    longitude : number
}

export type ItemType = {
    name : string,
    price : number,
    quantity : number
}

export type OrderType = {
    id : string,
    state : OrderStatus,
    items : Array<ItemType>,
    customerName : string,
    address : string,
    coordinations : Coordinates
}

export default class Order{
    #id : string
    #state : OrderStatus
    #items : Array<ItemType>
    #customerName : string
    #address : string
    #coordinations : Coordinates

    constructor(props : any){
        this.#id = props.id
        this.#state = props.state
        this.#items = props.items
        this.#customerName = props.customerName
        this.#address = props.address
        this.#coordinations = props.coordinations
    }

    get customerName(){
        return this.#customerName
    }

    get id(){
        return this.#id
    }

    get state(){
        return this.#state
    }

    get customerAddress(){
        return this.#address
    }

    get coordinations(){
        return this.#coordinations
    }
    
}
