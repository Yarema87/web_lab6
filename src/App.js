import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './main_page/Homepage';
import CatalogPage from './catalog_page/CatalogPage';
import DetailsPage from './details_page/DetailsPage';
import CartPage from './cart_page/CartPage';
import { Provider } from 'react-redux';
import {persistor} from './cart_page/store';
import { PersistGate } from 'redux-persist/integration/react';
import store from './cart_page/store';


function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/catalog" element={<CatalogPage/>} />
            <Route exact path="/cars/:id" element={<DetailsPage/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </div>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
