import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { All_cars } from './AllCars';
import HomePage from './Homepage';
import CatalogPage from './CatalogPage';
import DetailsPage from './DetailsPage';


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
