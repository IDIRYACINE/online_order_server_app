import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'controllers/store/Hooks';
export default function OrderCard(props) {
    const order = useAppSelector(state => state.order.orders[props.index]);
    const navigate = useNavigate();
    const orderStatusClassName = "order-status-" + order.State.toString().toLowerCase();
    function navigateToOrderDetails() {
        navigate(`/OrderDetails/${order.id}`, { replace: true });
    }
    return (React.createElement("tr", { className: "order-row" },
        React.createElement("td", { className: "order-id" }, order.id),
        React.createElement("td", { className: "order-customer" }, order.FullName),
        React.createElement("td", { className: "order-date" }, "18:35"),
        React.createElement("td", { className: orderStatusClassName + " fw-bold h5" }, order.State),
        React.createElement("td", { className: "order-price" }, order.PhoneNumber),
        React.createElement("td", { className: "order-actions" },
            React.createElement(Button, { className: "btn btn-primary btn-login text-uppercase fw-bold", onClick: () => navigateToOrderDetails() }, "Full details"))));
}
//# sourceMappingURL=OrderCard.js.map