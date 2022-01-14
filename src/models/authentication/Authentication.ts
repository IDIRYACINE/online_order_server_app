import io,{Socket} from "socket.io-client";

class Authentication{
    #io: Socket

    constructor(host:string){
        //must enable autoconnect and headers on socket creation 
        //otherwise the connection cannot be esatblished
        this.#io = io(host ,{
            autoConnect : true,
            reconnection:false,
            extraHeaders: {
                "my-custom-header": "abcd"
            },
        })

        this.#io.on("connect",()=>{
            console.log("connected")
        })

    }

    LoginWithUsernameAndPassword(username:string , password:string) : boolean{
        this.#io.io.opts = {
            query : {username : username , password :password},
          
        }

        this.#io.connect()

       return this.#io.connected
    }
}

export default Authentication