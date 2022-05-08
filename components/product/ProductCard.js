import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from 'utils/api/ProductApi';
import { useAppDispatch, useAppSelector } from 'controllers/store/Hooks';
import { removeProduct } from 'controllers/store/reducers/ProductsReducer';
import styles from 'styles/Product/ProductCard.module.scss';
export default function ProductCard(props) {
    const product = useAppSelector(state => state.product[props.categoryId][props.index]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function handleProductEdit() {
        navigate(`/EditProduct/${props.categoryId}/${props.index}`, { replace: true });
    }
    function handleProductDelete() {
        deleteProduct({
            productId: product.Id,
            categoryId: props.categoryId
        }, {
            onSuccess: () => { dispatch(removeProduct({ product: product, categoryKey: props.categoryId })); },
            onFail: () => { console.log("fail"); }
        });
    }
    return (React.createElement(Card, { className: styles['product-card'] },
        React.createElement(Image, { className: styles['product-image'], src: product.ImageUrl }),
        React.createElement("h3", { className: "fw-bold py-2 " }, product.Name),
        React.createElement(Card.Body, { className: "px-5" },
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement("button", { className: "btn btn-link", onClick: () => { handleProductDelete(); } }, "Delete")),
                React.createElement(Col, null,
                    React.createElement("button", { className: "btn btn-link", onClick: () => { handleProductEdit(); } }, "Edit"))))));
}
//# sourceMappingURL=ProductCard.js.map