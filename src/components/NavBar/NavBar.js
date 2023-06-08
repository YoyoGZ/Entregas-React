import CartWidget from "./cartWidget/CartWidget";
import "../../helpers/Styles.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
            <nav className= "navBar">
                <Link to ="/#" className="logo"><h1 className="titulo">The White Rabbit</h1></Link>
                    <ul className="itemNav">
                        <li className="itemNav">
                            <Link className="itemNav" to="/genero/Clasico">Clasico</Link>
                        </li>
                        <li className="itemNav">
                            <Link className="itemNav" to="/genero/Novela">Novela</Link>
                        </li>
                        <li className="itemNav">
                            <Link className="itemNav" to="/genero/Thriller">Thriller</Link>
                        </li>
                        <li className="itemNav">
                            <Link className="itemNav" to="Contacto">Contacto</Link>
                        </li>
                        <div className="cart">
                            <CartWidget />
                        </div>
                    </ul>
            </nav>
        )
    };
export default NavBar