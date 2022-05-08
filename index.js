import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './controllers/store/Store';
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(BrowserRouter, null,
    React.createElement(Provider, { store: Store },
        React.createElement(App, null))));
//# sourceMappingURL=index.js.map