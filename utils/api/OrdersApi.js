//curl -d '{"infos":{"Id":"f21","FullName":"idiryacine","PhoneNumber":"05","Email":"gg"}}' -H 'Content-Type:application/json' http://localhost:3001/RegisterCustomer
import axios from "axios";
import { AuthKey } from "../../controllers/authentication/Authentication";
import { FetchCustomerApi, FetchCustomerExtrasApi } from "./ApiConfig";
export async function getCustomer(customerId, callbacks) {
    axios.get(FetchCustomerApi, {
        params: { id: customerId },
        headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function getCustomerExtras(customerId, callbacks) {
    axios.get(FetchCustomerExtrasApi, {
        params: { id: customerId },
        headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
//# sourceMappingURL=OrdersApi.js.map