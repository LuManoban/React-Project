import { Link } from "react-router-dom";
import '../styles/index.css'
import '../styles/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
  return (
    <>

      <header className="header">
        <nav className="header-nav flexbox">
          <div className="flexbox">
            <img className="img-header" src="/IMG/Logo Restobar.png" alt=""/>
          </div>

          <a href="#headerMenu" className="icon md:d-none">
            <i className="bi bi-list"></i>
          </a>

          <div className="flexbox">
            <ul
              className="list list--header-menu flexbox flexbox--center flexbox--responsive g-md"
              id="headerMenu"
            >
              <li>
                <Link className="button1" to="/inicio">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="button1" to="/productos">
                  Productos
                </Link>
              </li>
              <li>
                <Link className="button1" to="/contactanos">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link className="button1" to="/delivery">
                  Delivery
                </Link>
              </li>
              <li>
                <Link className="button1" to="/login">
                  Login
                </Link>  
              </li>
              <li>
                <Link className="button1" to="/registrate">
                  Registrate
                </Link>  
              </li>
            </ul>
          </div>
        </nav>
      </header>
   
    </>
  );
};

export default Header;
