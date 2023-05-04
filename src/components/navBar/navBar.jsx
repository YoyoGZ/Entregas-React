import CartWidget from "../cartWidget/cart";
import "./navBar.css"
const NavBar = () => {
    return (
            <nav className= "navBar">
                <h2>The White Rabbit</h2>
                <div className="btnNav cart">
                    <ul>
                        <li className="btnNav">
                            <button>Nosotros</button>
                        </li>
                        <li className="btnNav">
                            <button>Nuestro Catalogo</button>
                        </li>
                        <li className="btnNav">
                            <button>Mi cuenta</button>
                        </li>
                        <li className="btnNav">
                            <button>Contacto</button>
                        </li>
                        <li className="btnNav">
                            <button>Favoritos</button>
                        </li>
                        <li className="btnNav">
                            <button>Busqueda por Titulo</button>
                        </li>
                        <div className="cart">
                            <CartWidget />
                        </div>

                    </ul>
                </div>
            </nav>
        )
    };
export default NavBar