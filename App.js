import React from 'react';
import OrdersBoard from './pages/orders/OrdersBoard';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './pages/catalogue/Catalogue';
import Login from './pages/authentication/Login';
import CategoryEdit from './pages/category/CategoryEdit';
import CategoryCreator from './pages/category/CategoryCreation';
import Category from './pages/catalogue/Category';
import ProductCreator from './pages/product/ProductCreator';
import ProductEditor from './pages/product/ProductEditor';
import NavigationBar from './components/navbar/SideNavBar';
import OrderDetails from './pages/orders/OrderDetails';
import SettingsBoard from './pages/settings/SettingsBoard';
import PrivateRoute from './components/auth/PrivateRoutes';
import { Row, Col, Container } from 'react-bootstrap';
import './styles/App.scss';
function App() {
    return (React.createElement(Row, { className: "App " },
        React.createElement(Col, { className: "col-sm-1 nav-holder" },
            React.createElement(NavigationBar, null)),
        React.createElement(Col, { className: "app-body justify-content-center" },
            React.createElement(Container, { className: "container-sm" },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/Login", element: React.createElement(Login, null) }),
                    React.createElement(Route, { path: "/Orders", element: React.createElement(PrivateRoute, null,
                            React.createElement(OrdersBoard, null)) }),
                    React.createElement(Route, { path: "/Catalogue", element: React.createElement(PrivateRoute, null,
                            React.createElement(Catalogue, null)) }),
                    React.createElement(Route, { path: "/Category/:categoryId", element: React.createElement(PrivateRoute, null,
                            React.createElement(Category, null)) }),
                    React.createElement(Route, { path: "/EditCategory/:categoryId", element: React.createElement(PrivateRoute, null,
                            React.createElement(CategoryEdit, null)) }),
                    React.createElement(Route, { path: "/CreateCategory", element: React.createElement(PrivateRoute, null,
                            React.createElement(CategoryCreator, null)) }),
                    React.createElement(Route, { path: "/CreateProduct/:categoryId", element: React.createElement(PrivateRoute, null,
                            React.createElement(ProductCreator, null)) }),
                    React.createElement(Route, { path: "/EditProduct/:categoryId/:productId", element: React.createElement(PrivateRoute, null,
                            React.createElement(ProductEditor, null)) }),
                    React.createElement(Route, { path: "/Settings", element: React.createElement(PrivateRoute, null,
                            React.createElement(SettingsBoard, null)) }),
                    React.createElement(Route, { path: "/OrderDetails/:orderId", element: React.createElement(PrivateRoute, null,
                            React.createElement(OrderDetails, null)) }))),
            React.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", crossOrigin: "anonymous" }))));
}
export default App;
//# sourceMappingURL=App.js.map