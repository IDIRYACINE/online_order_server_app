import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MapComponent from "components/map/Map";
import { useAppSelector } from "controllers/store/Hooks";
import styles from 'styles/order/OrderDetaills.module.scss';
function OrderItemsCard(props) {
    return (React.createElement(Card, null,
        React.createElement(Card.Body, null, props.items.map((value, index) => {
            return React.createElement(OrderItem, { key: index, infos: value });
        })),
        React.createElement(Card.Footer, null,
            "Total Price : ",
            totalPriceCalc(props.items),
            " Da")));
}
function OrderItem(props) {
    console.log(props);
    return (React.createElement(Container, null,
        React.createElement(Row, { className: "g-3" },
            React.createElement(Col, { className: "col-sm-4" },
                React.createElement(Form.Label, null, props.infos.name)),
            React.createElement(Col, { className: "col-sm-3" },
                React.createElement(Form.Label, null,
                    "X",
                    props.infos.quantity)),
            React.createElement(Col, { className: "col-sm-3" },
                React.createElement(Form.Label, null, props.infos.price)))));
}
function OrderInfo(props) {
    return (React.createElement(Card, { className: styles['customer-card'] + " mb-3" },
        React.createElement(Card.Body, { className: styles['card-body'] },
            React.createElement(Row, null,
                React.createElement(Col, { className: "col-sm-3" },
                    React.createElement("h6", { className: "mb-0" }, "Full Name")),
                React.createElement(Col, { className: "col-sm-9 text-secondary" }, props.order.FullName)),
            React.createElement("hr", null),
            React.createElement(Row, null,
                React.createElement(Col, { className: "col-sm-3" },
                    React.createElement("h6", { className: "mb-0" }, "Phone")),
                React.createElement(Col, { className: "col-sm-9 text-secondary" }, props.order.PhoneNumber)),
            React.createElement("hr", null),
            React.createElement(Row, null,
                React.createElement(Col, { className: "col-sm-3" },
                    React.createElement("h6", { className: "mb-0" }, "Address")),
                React.createElement(Col, { className: "col-sm-9 text-secondary" }, props.order.Address)),
            React.createElement("hr", null))));
}
function totalPriceCalc(items) {
    let priceTotal = 0;
    items.forEach((item) => {
        priceTotal += item.price * item.quantity;
    });
    return priceTotal;
}
export default function OrderDetails() {
    let params = useParams();
    const order = useAppSelector(state => state.order.orders[params.orderId]);
    const zoom = 8;
    return (React.createElement(Container, { className: "align-self-start" },
        React.createElement(Col, { className: "col-md-5" },
            React.createElement(Row, null,
                React.createElement(OrderInfo, { order: order })),
            React.createElement(Row, null,
                React.createElement(OrderItemsCard, { items: order.items }))),
        React.createElement(Col, { className: styles['map-col'] + " col-md-6" },
            React.createElement(MapComponent, { center: { lat: order.Latitude, lng: order.Longitude }, zoom: zoom }))));
}
//# sourceMappingURL=OrderDetails.js.map