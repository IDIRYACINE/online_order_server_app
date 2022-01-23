import io,{Socket} from "socket.io-client";
import {add,loadOrders} from "../../redux/reducers/OrdersReducer";
import {Store} from '../../redux/Store'

let host :string = 'localhost:3001'
let openSocket: Socket
let onConnect : ()=>void

function setUpSocket(){
    openSocket.on("connect",()=>{
        onConnect()
    })

    openSocket.on("newOrder" , (order)=>{
        Store.dispatch(add(order))
    })

    openSocket.on("onConnectOrders",(orders)=>{
        Store.dispatch(loadOrders(orders))
    })

}

export function loginWithUsernameAndPassword(username:string , password:string){
    //must enable autoconnect and headers on socket creation 
   //otherwise the connection cannot be esatblished
   openSocket = io(host ,{
       autoConnect : true,
       reconnection:false,
       extraHeaders: {
           "my-custom-header": "abcd"
       },
       query : {username : username , password :password}
   })
   setUpSocket()
}

export function setOnConnectAction(action : ()=>void){
    onConnect = action
}

