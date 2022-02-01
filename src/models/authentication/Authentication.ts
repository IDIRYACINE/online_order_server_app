import io,{Socket} from "socket.io-client";
import {add,loadOrders} from "../../store/reducers/OrdersReducer";
import {Store} from '../../store/Store'
import {Host} from '../../api/ApiConfig'

let openSocket: Socket
let onConnect : ()=>void

function setUpSocket(){
    openSocket.on("connect",()=>{
        onConnect()
    })

    openSocket.on("newOrder" , (order)=>{
        console.log(order)
        if (order !== null){
            Store.dispatch(add(order))
        }
    })

    openSocket.on("onConnectOrders",(orders)=>{
        Store.dispatch(loadOrders(orders))
    })

}

export function loginWithUsernameAndPassword(username:string , password:string){
    //must enable autoconnect and headers on socket creation 
   //otherwise the connection cannot be esatblished
   openSocket = io(Host ,{
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

export let AuthKey:string = 'idir'

