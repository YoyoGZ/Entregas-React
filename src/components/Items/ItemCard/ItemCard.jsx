
const ItemCard = (props) => {
  return (
          <div className="item-card">
                <div className="item-card_header">
                  <h2 className="h2">{props.titulo}</h2>
                  <h2 className="h2">{props.autor}</h2>
                </div>
                <div className="item-card_img">
                  <img src={props.img} alt="imagen"></img>
                  <br/>
                  <small className="genero">{props.genero}</small>
                </div>
                <div className="item-card_detail">
                  <h4 className="item-card-price">Precio: $ {props.precio}</h4>
                </div>
                <div>
                  <button className='btn-MasInfo'>Mas Informacion</button>
              </div>
            </div>               
  )
}

export default ItemCard;