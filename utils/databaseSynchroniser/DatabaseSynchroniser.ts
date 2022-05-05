import axios from "axios"
import { SynchroniseDatabaseApi,Callbacks } from 'utils/api/ApiConfig'
import { AuthKey } from 'utils/authentication/Authentication'

function  synchroniseDatabase(callbacks : Callbacks){
    axios.get(
        SynchroniseDatabaseApi,
        {
        headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export const DatabaseSynchroniser  = {
    synchroniseDatabase: synchroniseDatabase,
}


