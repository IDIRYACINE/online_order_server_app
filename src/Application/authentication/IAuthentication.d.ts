
type VoidCallback = ()=>void

export declare interface IAuthentication {
    loginWithUsernameAndPassword(username:string,password:string) :  void,
    setOnConnectAction(action : VoidCallback ) : void;
}
