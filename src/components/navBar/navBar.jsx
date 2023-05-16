import CartWidget from "../cartWidget/CartWidget";
import "../../helpers/Styles.css"
const NavBar = () => {
    return (
            <nav className= "navBar itemNav">
                <a href="/#" className="logo"><h1 className="h1">The White Rabbit</h1></a>
                    <ul className="itemNav">
                        <li className="itemNav">
                            <a href="/#">Nosotros</a>
                        </li>
                        <li className="itemNav">
                            <a href="/#">Nuestro Catalogo</a>
                        </li>
                        <li className="itemNav">
                            <a href="/#">Mi Cuenta</a>
                        </li>
                        <li className="itemNav">
                            <a href="/#">Favoritos</a>
                        </li>
                        <li className="itemNav">
                            <a href="/#">Contacto</a>
                        </li>
                        <div className="cart">
                            <CartWidget />
                        </div>
                    </ul>
            </nav>
        )
    };
export default NavBar