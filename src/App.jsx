import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import shopLogo from './assets/shoplogo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <>
      <div>
          <Link to="/">
            <img src={shopLogo} className="logo shop" alt="Oldshop logo" />
          </Link>
        </div>

        <h1>Old Shop</h1>
        <h3>Your shop for old stuff.</h3>

        <p className="read-the-docs">
          Project under construction. Stay tuned! ;-)
        </p>

        {/*  */}
        <div className="card">
          <Routes>
            <Route path="/products" element={<ProductList />} />
          </Routes>

          <Link to="/products">
            <button className="button-link">
              Go to products
            </button>
          </Link>
        </div>
      </>
    </Router>
  );
}

export default App;
