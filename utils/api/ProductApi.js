import { FetchProductApi, CreateProductApi, UpdateProductApi, DeleteProductApi } from "./ApiConfig";
import axios from "axios";
import { AuthKey } from '../../controllers/authentication/Authentication';
export async function fetchProduct(options, callbacks) {
    axios.get(FetchProductApi, { params: { ...options },
        headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function updateProduct(options, callbacks) {
    axios.post(UpdateProductApi, { options: JSON.stringify(options) }, {
        headers: {
            'Content-Type': 'application/json',
            "X-Auth-key": AuthKey
        }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function createProduct(options, callbacks) {
    axios.post(CreateProductApi, { options: options }, { headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function deleteProduct(options, callbacks) {
    axios.get(DeleteProductApi, {
        params: { ...options },
        headers: { "X-Auth-key": AuthKey
        }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
//# sourceMappingURL=ProductApi.js.map