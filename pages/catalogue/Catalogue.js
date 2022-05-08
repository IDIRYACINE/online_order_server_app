import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from 'components/category/CategoryCard';
import { Row, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from 'controllers/store/Hooks';
import { fetchCategory } from 'utils/api/CategoryApi';
import { loadCategory } from 'controllers/store/reducers/CategoryReducer';
import { registerCategory } from 'controllers/store/reducers/ProductsReducer';
export default function Catalogue() {
    const categories = useAppSelector(state => state.category.categories);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function navigateToCategoryCreation() {
        navigate("/CreateCategory", { replace: true });
    }
    function loadCategories() {
        fetchCategory({ startIndex: "0", count: "5" }, {
            onSuccess: (response) => {
                dispatch(loadCategory({ categories: response.data }));
                dispatch(registerCategory({ categories: response.data }));
            },
            onFail: (error) => { console.log("failed"); }
        });
    }
    return (React.createElement("div", { className: "catalogue " },
        React.createElement(Row, null,
            React.createElement(Button, { className: " mb-2", onClick: () => { navigateToCategoryCreation(); } }, "New Category"),
            React.createElement(Button, { className: " mb-2", onClick: () => { loadCategories(); } }, "Load")),
        React.createElement(Row, { className: "row-cols-3" }, Object.entries(categories).map(([key, value]) => {
            return React.createElement(CategoryCard, { key: key, data: value, id: key });
        }))));
}
//# sourceMappingURL=Catalogue.js.map