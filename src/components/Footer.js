import { Link } from "react-router-dom";

import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";
import icon3 from "../assets/img/icon3.svg";
import icon4 from "../assets/img/icon4.svg";

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="footer">
          <Link className="footer__link" to="/">
            <img src={icon1} />
            <span>История</span>
          </Link>
          <Link className="footer__link" to="/platform">
            <img src={icon2} />
            <span>TG-Каналы</span>
          </Link>
          <Link className="footer__link" to="/">
            <img src={icon3} />
            <span>Cоц.сети</span>
          </Link>
          <Link className="footer__link" to="/payment">
            <img src={icon4} />
            <span>Помощь</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
