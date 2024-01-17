// Header.jsx
import CustomNavbar from ".";
//import { Link } from 'react-router-dom';
import styles from './Header.module.css';


const Header = () => {
  return (
    <header className= {styles.Header}>
      <CustomNavbar />
    </header>
  );
};

export default Header;
