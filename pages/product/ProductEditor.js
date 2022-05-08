import React, { useState } from 'react';
import { Row, Container, Button, Card, Image } from 'react-bootstrap';
import { updateProduct } from 'utils/api/ProductApi';
import { useAppDispatch, useAppSelector } from 'controllers/store/Hooks';
import { updateProduct as update } from 'controllers/store/reducers/ProductsReducer';
import SizePriceListForm from 'components/forms/SizePriceListForm';
import { useNavigate, useParams } from 'react-router-dom';
import { CacheHelper } from 'controllers/attributesCacher/CacheHelper';
import { AttributeRow } from 'components/forms/Forms';
import styles from 'styles/product/ProductEditor.module.scss';
export default function ProductEditor() {
    const dispatch = useAppDispatch();
    const params = useParams();
    const product = useAppSelector(state => state.product[params.categoryId][parseInt(params.productId)]);
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState(product.ImageUrl);
    const [sizePriceFormList, setSizePriceFormList] = useState([0]);
    const [priceList, setPrice] = useState(product.Price);
    const [sizeList, setSize] = useState(product.Size);
    const [name, setName] = useState(product.Name);
    CacheHelper.setTargetAttributes('Product');
    function addSize() {
        setPrice(priceList.concat([""]));
        setSize(sizeList.concat([""]));
        setSizePriceFormList(sizePriceFormList.concat([1]));
    }
    function updateSize(index, value) {
        let temp = [...sizeList];
        temp[index] = value;
        setSize(temp);
        CacheHelper.cacheAttribute("Size", temp);
    }
    function updatePrice(index, value) {
        let temp = [...priceList];
        temp[index] = value;
        setPrice(temp);
        CacheHelper.cacheAttribute("Price", temp);
    }
    function updateName(value) {
        setName(value);
        CacheHelper.cacheAttribute("Name", value);
    }
    function updateImageUrl(value) {
        setImageUrl(value);
        CacheHelper.cacheAttribute("ImageUrl", value);
    }
    function updateDescription(value) {
        CacheHelper.cacheAttribute("Description", value);
    }
    function removeSizePriceForm(id) {
        setPrice(priceList.filter((item, index) => index !== id));
        setSize(sizeList.filter((item, index) => index !== id));
        setSizePriceFormList(sizePriceFormList.filter((item, index) => index !== id));
        CacheHelper.cacheAttribute("Price", product.Price);
        CacheHelper.cacheAttribute("Size", product.Size);
    }
    function save() {
        updateProduct({
            categoryId: params.categoryId,
            productId: product.Id,
            updatedValues: CacheHelper.getCachedValues()
        }, {
            onSuccess: () => {
                dispatch(update({ oldProduct: product, categoryKey: params.categoryId, updatedValues: CacheHelper.getCachedValues() }));
                CacheHelper.resetCache();
                navigate(`/Category/${params.categoryId}`, { replace: true });
            },
            onFail: (error) => {
                console.log(error);
                CacheHelper.resetCache();
            }
        });
    }
    function cancel() {
        navigate(`/Category/${params.categoryId}`, { replace: true });
    }
    return (React.createElement(Container, null,
        React.createElement(Row, { className: "row-cols-2" },
            React.createElement(Card, null,
                React.createElement(Image, { className: styles['product-image'], src: imageUrl }),
                React.createElement(Card, { className: styles['product-infos'] },
                    React.createElement(AttributeRow, { hint: 'Product Image', label: 'Image Url', initialValue: product.ImageUrl, onChange: updateImageUrl }),
                    React.createElement(AttributeRow, { hint: 'Product Name', label: 'Name', initialValue: name, onChange: updateName }),
                    React.createElement(AttributeRow, { hint: 'Product Description', label: 'Description', initialValue: product.Description, onChange: updateDescription }))),
            React.createElement(Card, null,
                React.createElement(SizePriceListForm, { sizeList: product.Size, priceList: product.Price, sizePriceFormList: sizePriceFormList, removeSizePriceForm: removeSizePriceForm, addSize: addSize, updatePrice: updatePrice, updateSize: updateSize }))),
        React.createElement(Row, { className: "pt-4 px-2" },
            React.createElement(Button, { className: "my-1", onClick: () => { cancel(); } }, "Cancel"),
            React.createElement(Button, { className: "my-1", onClick: () => { save(); } }, "Save"))));
}
//# sourceMappingURL=ProductEditor.js.map