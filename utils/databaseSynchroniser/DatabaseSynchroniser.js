import axios from "axios";
import { SynchroniseDatabaseApi } from '../api/ApiConfig';
import { AuthKey } from '../../controllers/authentication/Authentication';
function synchroniseDatabase(callbacks) {
    axios.get(SynchroniseDatabaseApi, {
        headers: { "X-Auth-key": AuthKey }
    })
        .then(callbacks.onSuccess)
        .catch(callbacks.onFail);
}
export const DatabaseSynchroniser = {
    synchroniseDatabase: synchroniseDatabase,
};
//# sourceMappingURL=DatabaseSynchroniser.js.map