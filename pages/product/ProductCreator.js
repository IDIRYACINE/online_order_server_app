import React, { useState } from 'react';
import { Container, Row, Image, Card, Button } from 'react-bootstrap';
import { createProduct } from 'utils/api/ProductApi';
import SizePriceListForm from 'components/forms/SizePriceListForm';
import { useAppDispatch } from 'controllers/store/Hooks';
import { addProduct } from 'controllers/store/reducers/ProductsReducer';
import { useNavigate, useParams } from 'react-router-dom';
import { AttributeRow } from 'components/forms/Forms';
import styles from 'styles/product/ProductCreator.module.scss';
export default function ProductCreator() {
    const params = useParams();
    const [imageUrl, setImageUrl] = useState("");
    const [sizePriceFormList, setSizePriceFormList] = useState([0]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const product = {
        Id: "",
        Name: "",
        ImageUrl: imageUrl,
        Description: "",
        Price: [],
        Size: [],
        Index: -1
    };
    function addSize() {
        product.Price.push("");
        product.Size.push("");
        setSizePriceFormList(sizePriceFormList.concat([1]));
    }
    function updateSize(index, value) {
        product.Size[index] = value;
    }
    function updatePrice(index, value) {
        product.Price[index] = value;
    }
    function updateName(value) {
        product.Name = value;
        product.Id = value;
    }
    function updateImageUrl(value) {
        setImageUrl(value);
        product.ImageUrl = value;
    }
    function updateDescription(value) {
    }
    function removeSizePriceForm(id) {
        product.Price.splice(id);
        product.Size.splice(id);
        setSizePriceFormList(sizePriceFormList.filter((item, index) => index !== id));
    }
    function save() {
        createProduct({
            product: product,
            categoryId: params.categoryId
        }, {
            onSuccess: () => {
                dispatch(addProduct({ product: product, categoryKey: params.categoryId }));
                navigate(`/Category/${params.categoryId}`, { replace: true });
            },
            onFail: (error) => { console.log(error); }
        });
    }
    /*
    
    */
    function cancel() {
        navigate(`/Category/${params.categoryId}`, { replace: true });
    }
    return (React.createElement(Container, null,
        React.createElement(Row, { className: "row-cols-2" },
            React.createElement(Card, null,
                React.createElement(Image, { className: styles['product-image'], src: imageUrl }),
                React.createElement(Card, { className: styles['product-infos'] },
                    React.createElement(AttributeRow, { hint: 'Category Image', label: 'Image Url', initialValue: '', onChange: updateImageUrl }),
                    React.createElement(AttributeRow, { hint: 'Category Name', label: 'Name', initialValue: '', onChange: updateName }),
                    React.createElement(AttributeRow, { hint: 'Category Description', label: 'Description', initialValue: '', onChange: updateDescription }))),
            React.createElement(Card, null,
                React.createElement(SizePriceListForm, { sizeList: product.Size, priceList: product.Price, sizePriceFormList: sizePriceFormList, removeSizePriceForm: removeSizePriceForm, addSize: addSize, updatePrice: updatePrice, updateSize: updateSize }))),
        React.createElement(Row, { className: "pt-4 px-2" },
            React.createElement(Button, { className: "my-1", onClick: () => { cancel(); } }, "Cancel"),
            React.createElement(Button, { className: "my-1", onClick: () => { save(); } }, "Save"))));
}
//# sourceMappingURL=ProductCreator.js.map