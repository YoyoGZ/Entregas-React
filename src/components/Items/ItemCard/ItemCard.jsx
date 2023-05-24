
const ItemCard = ({titulo, autor, img, genero, precio, stock}) => {
  return (
          <div className="item-card">
                <div className="item-card_header">
                  <h2 className="h2">{titulo}</h2>
                  <h2 className="h2">{autor}</h2>
                </div>
                <div className="item-card_img">
                  <img src={img} alt="imagen"></img>
                  <br/>
                  <small className="card-genero">{genero}</small>
                </div>
                <div>
                  <h4 className="item-card-price">Precio: $ {precio}</h4>
                  <p className="h4" > Cantidad Disponible = {stock}</p>
                </div>
                <div>
                  <button className='btn-MasInfo'>Mas Informacion</button>
              </div>
            </div>               
  )
}

export default ItemCard;