import io,{Socket} from "socket.io-client";
import {add} from "../store/reducers/OrdersReducer";
import {Store} from '../store/Store'
import {Host} from '../../utils/api/ApiConfig'

export let AuthKey:string = 'idir'

let openSocket: Socket
let isLoggedIn : boolean = false
let onConnect : ()=>void

function setUpSocket(){
    openSocket.on("connect",()=>{
        isLoggedIn = true
        onConnect()
    })

    openSocket.on("newOrder" , (order)=>{
        if (order !== null){
            Store.dispatch(add(order))
        }
    })


}


function loginWithUsernameAndPassword (username : string,password : string){
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

function setOnConnectAction(action : ()=>void){
    onConnect = action
}

export const Authentication  = {
    loginWithUsernameAndPassword: loginWithUsernameAndPassword,
    setOnConnectAction: setOnConnectAction,
    isLoggedIn: ()=>isLoggedIn
}


