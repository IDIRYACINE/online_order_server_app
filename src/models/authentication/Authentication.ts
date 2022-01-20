import io,{Socket} from "socket.io-client";

class Authentication{
    #io: Socket
    #host : string 

    constructor(host:string){
       
        this.#host = host 

    }

    LoginWithUsernameAndPassword(username:string , password:string) : boolean{
       
         //must enable autoconnect and headers on socket creation 
        //otherwise the connection cannot be esatblished
        this.#io = io(this.#host ,{
            autoConnect : true,
            reconnection:false,
            extraHeaders: {
                "my-custom-header": "abcd"
            },
            query : {username : "username" , password :password}
        })

        this.SetUpSocket()
        
       return this.#io.connected
    }

    private SetUpSocket(){
        this.#io.on("connect",()=>{
            console.log("connected")
        })

        this.#io.on("invalid-user" , (msg)=>{
            console.log("error")
        })
    }
}

export default Authentication