import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteCategory } from 'utils/api/CategoryApi';
import { useAppDispatch, useAppSelector } from 'controllers/store/Hooks';
import { removeCategory, } from 'controllers/store/reducers/CategoryReducer';
import styles from 'styles/Category/CategoryCard.module.scss';
export default function CategoryCard(props) {
    const category = useAppSelector(state => state.category.categories[props.id]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    function handleCategoryEdit() {
        navigate(`/EditCategory/${props.id}`, { replace: true });
    }
    function handleCategoryDeletion() {
        deleteCategory({
            categoryId: category.Id
        }, {
            onSuccess: () => {
                dispatch(removeCategory({ category: category }));
            },
            onFail: (error) => {
                console.log(error);
            }
        });
    }
    function handleCategoryExploration() {
        navigate(`/Category/${props.id}`, { replace: true });
    }
    return (React.createElement(Card, { className: styles['category-card'] },
        React.createElement(Image, { className: styles['category-image'], src: category.ImageUrl }),
        React.createElement("h3", { className: "fw-bold py-2 " }, category.Name),
        React.createElement(Card.Subtitle, null, category.ProductCount),
        React.createElement(Card.Body, { className: "px-5" },
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement("button", { className: "btn btn-link", onClick: () => { handleCategoryDeletion(); } }, "Delete")),
                React.createElement(Col, null,
                    React.createElement("button", { className: "btn btn-link", onClick: () => { handleCategoryEdit(); } }, "Edit")),
                React.createElement(Col, null,
                    React.createElement("button", { className: "btn btn-link", onClick: () => { handleCategoryExploration(); } }, "Explore"))))));
}
//# sourceMappingURL=CategoryCard.js.map