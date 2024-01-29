// App.jsx

import NavbarComponent from "./components/NavbarComponent/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Footer from "./components/Footer/Footer.jsx";
//import Hero from "./components/HeroComponent/Hero.jsx";
//import ProductList from "./components/ProductList.jsx"
import './App.css';


function App() {
  return (
      <div>
        <NavbarComponent />
        {/* <Hero /> */}
        <Categories />
        <Footer />
      </div>
  );
}

export default App;
