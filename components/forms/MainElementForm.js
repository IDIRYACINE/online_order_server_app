import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Form from "react-bootstrap/esm/Form";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function MainElementForm(props) {
    return (React.createElement(Form, { className: "px-5 py-5" },
        React.createElement(Form.Group, null,
            React.createElement(Row, { className: "g-3" },
                React.createElement(Col, { className: "col-sm-5" },
                    React.createElement(Image, { src: props.ImageUrl })),
                React.createElement(Col, { className: "col-sm-5" },
                    React.createElement(Form.Control, { type: "Url", placeholder: "Image Url", value: props.ImageUrl, onChange: (e) => { props.updateImageUrl(e.target.value); } })))),
        React.createElement(Form.Group, null,
            React.createElement(Row, { className: "g-3" },
                React.createElement(Col, { className: "col-sm-2" },
                    React.createElement(Form.Label, null, "Name")),
                React.createElement(Col, { className: "col-sm-8" },
                    React.createElement(Form.Control, { placeholder: "Name", value: props.name, onChange: (e) => props.updateName(e.target.value) })))),
        React.createElement(Form.Group, null,
            React.createElement(Row, { className: "g-3" },
                React.createElement(Col, { className: "col-sm-2" },
                    React.createElement(Form.Label, null, "Description")),
                React.createElement(Col, { className: "col-sm-8" },
                    React.createElement(Form.Control, { placeholder: "Description", value: props.description, onChange: (e) => props.updateDescription(e.target.value) })))),
        React.createElement(ButtonGroup, { className: "py-3" },
            React.createElement(Button, { onClick: () => { props.save(); } }, "Save"))));
}
//# sourceMappingURL=MainElementForm.js.map