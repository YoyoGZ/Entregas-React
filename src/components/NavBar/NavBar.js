import CartWidget from "../cartWidget/CartWidget";
import "../../helpers/Styles.css"
const NavBar = () => {
    return (
            <nav className= "navBar">
                <a href="/#" className="logo"><h1 className="titulo">The White Rabbit</h1></a>
                    <ul className="itemNav">
                        <li className="itemNav">
                            <a className="itemNav" href="/#">Nosotros</a>
                        </li>
                        <li className="itemNav">
                            <a className="itemNav" href="/#">Nuestro Catalogo</a>
                        </li>
                        <li className="itemNav">
                            <a className="itemNav" href="/#">Mi Cuenta</a>
                        </li>
                        <li className="itemNav">
                            <a className="itemNav" href="/#">Favoritos</a>
                        </li>
                        <li className="itemNav">
                            <a className="itemNav" href="/#">Contacto</a>
                        </li>
                        <div className="cart">
                            <CartWidget />
                        </div>
                    </ul>
            </nav>
        )
    };
export default NavBar