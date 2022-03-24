import {IDatabaseSynchroniser} from './IDatabaseSynchroniser'
import axios from "axios"
import { SynchroniseDatabaseApi,Callbacks } from '../api/ApiConfig'
import { AuthKey } from '../../Application/authentication/Authentication'

function  synchroniseDatabase(callbacks : Callbacks){
    axios.get(
        SynchroniseDatabaseApi,
        {
        headers:{"X-Auth-key" : AuthKey}
    })
    .then(callbacks.onSuccess)
    .catch(callbacks.onFail)
}

export const DatabaseSynchroniser : IDatabaseSynchroniser = {
    synchroniseDatabase: synchroniseDatabase,
}


