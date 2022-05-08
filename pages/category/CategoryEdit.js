import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCategory } from 'utils/api/CategoryApi';
import { useAppDispatch, useAppSelector } from 'controllers/store/Hooks';
import { updateCategory as update } from 'controllers/store/reducers/CategoryReducer';
import { CacheHelper } from 'controllers/attributesCacher/CacheHelper';
import { Container, Button, Image, Col, Row, Card } from 'react-bootstrap';
import { AttributeRow } from 'components/forms/Forms';
import styles from 'styles/category/CategoryEdit.module.scss';
export default function CategoryEdit() {
    const params = useParams();
    const category = useAppSelector(state => state.category.categories[params.categoryId]);
    const navigate = useNavigate();
    const [name, setName] = useState(category.Name);
    const [imageUrl, setImageUrl] = useState(category.ImageUrl);
    const dispatch = useAppDispatch();
    function saveChanges() {
        updateCategory({
            categoryId: category.Id,
            updatedValues: CacheHelper.getCachedValues()
        }, {
            onSuccess: () => {
                dispatch(update({ oldCategory: category, updatedValues: CacheHelper.getCachedValues() }));
                CacheHelper.resetCache();
                navigate("/Catalogue", { replace: true });
            },
            onFail: () => {
                CacheHelper.resetCache();
                console.log("failed");
            }
        });
    }
    function cancel() {
        navigate("/Catalogue", { replace: true });
    }
    function handleNameChange(value) {
        CacheHelper.cacheAttribute("Name", value);
        setName(value);
    }
    function handleImageChange(value) {
        CacheHelper.cacheAttribute("ImageUrl", value);
        setImageUrl(value);
    }
    return (React.createElement(Container, null,
        React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(Image, { className: styles['category-image'], src: imageUrl })),
            React.createElement(Col, null,
                React.createElement(Card, { className: styles['category-infos'] },
                    React.createElement(AttributeRow, { hint: 'Category Image', label: 'Image Url', initialValue: imageUrl, onChange: handleImageChange }),
                    React.createElement(AttributeRow, { hint: 'Category Name', label: 'Name', initialValue: name, onChange: handleNameChange }),
                    React.createElement(AttributeRow, { hint: 'Category Description', label: 'Description', initialValue: '', onChange: (value) => { } })))),
        React.createElement(Row, { className: "pt-4 px-2" },
            React.createElement(Button, { className: "my-1", onClick: () => { cancel(); } }, "Cancel"),
            React.createElement(Button, { className: "my-1", onClick: () => { saveChanges(); } }, "Save"))));
}
//# sourceMappingURL=CategoryEdit.js.map