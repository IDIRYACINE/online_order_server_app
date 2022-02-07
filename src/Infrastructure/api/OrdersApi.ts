//curl -d '{"infos":{"Id":"f21","FullName":"idiryacine","PhoneNumber":"05","Email":"gg"}}' -H 'Content-Type:application/json' http://localhost:3001/RegisterCustomer

import axios from "axios";
import { AuthKey } from "../../Application/authentication/Authentication";
import { Callbacks, FetchCustomerApi, FetchCustomerExtrasApi } from "./ApiConfig";


export async function getCustomer(customerId:string , callbacks:Callbacks){
    axios.get(FetchCustomerApi,
        {
        params:{id : customerId},
        headers:{"X-Auth-key" : AuthKey}})
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail)
    }


export async function getCustomerExtras(customerId:string , callbacks:Callbacks){
    axios.get(FetchCustomerExtrasApi,
        {
        params:{id : customerId},
        headers:{"X-Auth-key" : AuthKey}})
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail)
    }
