
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.svg";  
import usericon from "../assets/img/user-icon.svg"; 

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
      <header className="header">
        <div className="container">
          <div className="header__box">

          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="Логотип" />
            </Link>
          </div>

          <div className="header__tabs">
            <Link className="btn btn-active" to="/">Соц.сети</Link>
            <Link className="btn" to="/">TG-Каналы</Link>
          </div>

          <div className="header__account">
            {isAuthenticated ? (
              <>
              <Link className="header__pay" to="/" >
                0 ₽ <span>+</span>
              </Link>
              <Link className="header__logout" to="/" >
                <img src={usericon} alt="" />
              </Link>
              </>
            ) : (
              <Link className="btn-login" to="/" onClick={() => setIsAuthenticated(false)} >Выйти из аккаунта</Link>
            )}
          </div>
            
          </div>  
        </div>
      </header>
    );
  }
  