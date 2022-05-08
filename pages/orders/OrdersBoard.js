import React from "react";
import { useAppDispatch, useAppSelector } from "controllers/store/Hooks";
import OrderCard from 'components/order/OrderCard';
import { add, remove } from 'controllers/store/reducers/OrdersReducer';
import { OrderStatus } from "data/orders/Order";
import { Container, Table, Card } from "react-bootstrap";
import 'styles/order/OrdersBoard.module.scss';
let dummyIndex = -1;
export default function OrdersBoard() {
    const orders = useAppSelector(state => state.order.orders);
    const dispatch = useAppDispatch();
    const orderTableHeaders = ["#Id", "Name", "Date", "Status", "Phone", ""];
    function addOrder() {
        dummyIndex++;
        let dummyOrder = {
            id: "f21" + dummyIndex,
            State: OrderStatus.Delivery,
            items: [],
            PhoneNumber: "052222",
            Email: "idir@gmail",
            BanStatus: "Normal",
            FullName: 'idir',
            Latitude: 2,
            Longitude: 3,
            Address: 'bba',
            loaded: false
        };
        dispatch(add(dummyOrder));
    }
    function deleteOrder(key) {
        dispatch(remove(key));
    }
    return (React.createElement(Container, null,
        React.createElement(Card, { className: "order-list-holder border-0 shadow rounded-3 my-5" },
            React.createElement(Card.Body, { className: "card-body p-4 p-sm-5" },
                React.createElement("button", { onClick: () => { addOrder(); } }, "Add"),
                React.createElement("button", { onClick: () => { deleteOrder("f21"); } }, "Remove"),
                React.createElement(Table, { className: "colored-header datatable order-list" },
                    React.createElement("thead", null,
                        React.createElement("tr", null, orderTableHeaders.map(headline => { return React.createElement("th", null, headline); }))),
                    React.createElement("tbody", null, Object.entries(orders).map(([key, value]) => { return React.createElement(OrderCard, { key: '#' + value.id, index: key }); })))))));
}
//# sourceMappingURL=OrdersBoard.js.map