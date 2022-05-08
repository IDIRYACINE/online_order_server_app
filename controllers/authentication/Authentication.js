import io from "socket.io-client";
import { add, loadOrders } from "../store/reducers/OrdersReducer";
import { Store } from '../store/Store';
import { Host } from '../../utils/api/ApiConfig';
export let AuthKey = 'idir';
let openSocket;
let isLoggedIn = false;
let onConnect;
function setUpSocket() {
    openSocket.on("connect", () => {
        isLoggedIn = true;
        onConnect();
    });
    openSocket.on("newOrder", (order) => {
        if (order !== null) {
            Store.dispatch(add(order));
        }
    });
    openSocket.on("onConnectOrders", (orders) => {
        Store.dispatch(loadOrders(orders));
    });
}
function loginWithUsernameAndPassword(username, password) {
    //must enable autoconnect and headers on socket creation 
    //otherwise the connection cannot be esatblished
    openSocket = io(Host, {
        autoConnect: true,
        reconnection: false,
        extraHeaders: {
            "my-custom-header": "abcd"
        },
        query: { username: username, password: password }
    });
    setUpSocket();
}
function setOnConnectAction(action) {
    onConnect = action;
}
export const Authentication = {
    loginWithUsernameAndPassword: loginWithUsernameAndPassword,
    setOnConnectAction: setOnConnectAction,
    isLoggedIn: () => isLoggedIn
};
//# sourceMappingURL=Authentication.js.map