import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
function SizePriceForm(props) {
    return (React.createElement(Form.Group, { className: "my-2" },
        React.createElement(Row, { className: "g-3" },
            React.createElement(Col, { className: "col-sm" },
                React.createElement(Form.Control, { placeholder: "Price", value: props.price, onChange: e => props.updatePrice(props.index, e.target.value) })),
            React.createElement(Col, { className: "col-sm" },
                React.createElement(Form.Control, { placeholder: "Size", value: props.size, onChange: e => props.updateSize(props.index, e.target.value) })),
            React.createElement(Col, { className: "col-sm" },
                React.createElement(Button, { onClick: () => { props.remove(props.index); } }, "Remove")))));
}
export default function SizePriceListForm(props) {
    return (React.createElement(Form, { className: "bg-white px-5 py-5 overflow-auto w-80 h-70 max-vh-20" },
        props.sizePriceFormList.map((_, index) => {
            return React.createElement(SizePriceForm, { key: index, index: index, size: props.sizeList[index], price: props.priceList[index], remove: props.removeSizePriceForm, updateSize: props.updateSize, updatePrice: props.updatePrice });
        }),
        React.createElement(Button, { className: "my-2", onClick: () => props.addSize() }, "Add Size")));
}
//# sourceMappingURL=SizePriceListForm.js.map