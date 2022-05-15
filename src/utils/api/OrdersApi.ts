//curl -d '{"infos":{"Id":"f21","FullName":"idiryacine","PhoneNumber":"05","Email":"gg"}}' -H 'Content-Type:application/json' http://localhost:3001/RegisterCustomer

import axios from "axios";
import { OrderState } from "data/orders/Order";
import { AuthKey } from "../../controllers/authentication/Authentication";
import { Callbacks, UpdateOrderStatusApi } from "./ApiConfig";



export async function updateOrderStatus(orderStatus:OrderState,callbacks:Callbacks){
    axios.post(UpdateOrderStatusApi, {status : orderStatus},
        {
            headers:{"X-Auth-key" : AuthKey,  'Content-Type': 'application/json',},
        }

        )
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}
