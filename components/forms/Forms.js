import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
export function AttributeRow(props) {
    const [value, setValue] = useState(props.initialValue);
    function updateForm(value) {
        props.onChange(value);
        setValue(value);
    }
    return (React.createElement(Row, null,
        React.createElement(Col, { className: "col-sm-3" },
            React.createElement("h6", { className: "mb-0" }, props.label)),
        React.createElement(Col, { className: "col-sm-9" },
            React.createElement(Form.Control, { placeholder: props.hint, value: value, onChange: (e) => updateForm(e.target.value) }))));
}
//# sourceMappingURL=Forms.js.map