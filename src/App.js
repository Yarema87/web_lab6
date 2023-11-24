import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './main_page/Homepage';
import CatalogPage from './catalog_page/CatalogPage';
import DetailsPage from './details_page/DetailsPage';


function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/catalog" element={<CatalogPage/>} />
          <Route exact path="/cars/:id" element={<DetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
