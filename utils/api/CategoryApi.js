import { FetchCategoryApi, CreateCategoryApi, UpdateCategoryApi, DeleteCategoryApi } from "./ApiConfig";
import axios from "axios";
import { AuthKey } from '../../controllers/authentication/Authentication';
export async function fetchCategory(options, callbacks) {
    axios.get(FetchCategoryApi, {
        params: { ...options },
        headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function updateCategory(options, callbacks) {
    axios.post(UpdateCategoryApi, { options: options }, { headers: { "X-Auth-key": AuthKey } })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function createCategory(options, callbacks) {
    axios.post(CreateCategoryApi, { options })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export async function deleteCategory(options, callbacks) {
    axios.get(DeleteCategoryApi, {
        params: { ...options },
        headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
//# sourceMappingURL=CategoryApi.js.map