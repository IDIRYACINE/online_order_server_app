import React,{useState} from "react";
import Order from "../../models/orders/Order";
import OrderCard from './OrderCard'


export default function OrdersList() {
    const [orders , setOrders] = useState([new Order({id:"idir",customerName:"yacine"})])
    
    function addOrder(data : any){
        let result = orders.concat(new Order(data))
        setOrders(result)
    }

    function deleteOrder(index : number){
        let result = orders.slice()
        result.splice(index,1)
        setOrders(result)
    }

    return (
        <div className="OrdersList">
            <p>OrdersList</p>

            <button onClick={() =>{addOrder({id:"idir",customerName:"yacine"})}} >Add</button>

            <button onClick={()=>{deleteOrder(0)}}>Remove</button>

            {orders.map(element =>{ 
                return <OrderCard data={element}></OrderCard>
            })}

        </div>    
    )
    
}
