import { useState } from "react";
import { Link } from "react-router-dom";
import libros from "./data/libros";

const ItemCard = ({id, titulo, autor, img, genero, precio, stock}) => {

const [IsFavorite , setIsFavorite] = useState (false);

let classNameFavorite;
if (IsFavorite === false) {
  classNameFavorite = "item-card-favicon";
} else {
  classNameFavorite = "item-card-favicon.favorite"
}
function handleClickFav (){
  setIsFavorite (!IsFavorite);
}

  return (
          <div className="item-card">
            <span onClick={handleClickFav} className={classNameFavorite}>❤️
            </span>
                <div className="item-card_header">
                  <h2 className="h2">{titulo}</h2>
                  <h3 className="h2">{autor}</h3>
                </div>
                <div className="item-card_img">
                  <img src={img} alt="imagen"></img>
                  <small className="card-genero">{genero}</small>
                </div>
                <div> 
                  <h4 className="item-card-price">Precio: $ {precio}</h4>
                  <p className="h4"> Cantidad Disponible = {stock}</p>
                </div>
                <div>
                  <Link className="btn-MasInfo" to = {`/ItemList/${libros.id}`}> Mas Informacion </Link>
                </div>
            </div>               
  )
}

export default ItemCard;