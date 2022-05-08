import React, { useState } from 'react';
import { Container, Button, Image, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createCategory } from 'utils/api/CategoryApi';
import { AttributeRow } from 'components/forms/Forms';
import styles from 'styles/category/CategoryCreation.module.scss';
export default function CategoryCreator() {
    const navigate = useNavigate();
    const [imageUrl, updateImageUrl] = useState("https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png");
    let name = 'idir';
    let description = 'none';
    function updateName(value) {
        name = value;
    }
    function updateDescription(value) {
        description = value;
    }
    function handleCategoryCreation() {
        let category = {
            Id: name,
            Name: name,
            ImageUrl: imageUrl,
            Index: -1,
            ProductCount: 0
        };
        createCategory({
            category: category
        }, {
            onSuccess: () => { navigate("/Catalogue", { replace: true }); },
            onFail: (e) => {
                console.log(e);
            }
        });
    }
    function cancel() {
        navigate("/Catalogue", { replace: true });
    }
    return (React.createElement(Container, null,
        React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Image, { className: styles['category-image'], src: imageUrl })),
            React.createElement(Col, null,
                React.createElement(Card, { className: styles['category-infos'] },
                    React.createElement(AttributeRow, { hint: 'Category Image', label: 'Image Url', initialValue: '', onChange: updateImageUrl }),
                    React.createElement(AttributeRow, { hint: 'Category Name', label: 'Name', initialValue: '', onChange: updateName }),
                    React.createElement(AttributeRow, { hint: 'Category Description', label: 'Description', initialValue: '', onChange: updateDescription })))),
        React.createElement(Row, { className: "pt-4 px-2" },
            React.createElement(Button, { className: "my-1", onClick: () => { cancel(); } }, "Cancel"),
            React.createElement(Button, { className: "my-1", onClick: () => { handleCategoryCreation(); } }, "Save"))));
}
//# sourceMappingURL=CategoryCreation.js.map