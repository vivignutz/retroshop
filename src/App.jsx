// App.jsx

import NavbarComponent from "./components/NavbarComponent/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Footer from "./components/Footer/Footer.jsx";
//import ProductList from "./components/ProductList.jsx"
import ContactForm from "./components/ContactForm/Contact.jsx";
import './App.css';


function App() {
  return (
      <div>
        <NavbarComponent />
         {/*<HeroSection /> */}
        <Categories />
        <Footer />
      </div>
  );
}

export default App;
