
import ItemCount from '../ItemCount/ItemCount';

const ItemCard = (props) => {
  return (
      <div className="section">
          <div className="item-card">
            <div className="cover item">
                <div>
                  <h2 className="h2">{props.titulo}</h2>
                  <br/>
                  <h2 className="h2">{props.autor}</h2>
                </div>
                <div className="item-card-img">
                  <img src={props.img} alt="img"></img>
                  <small>{props.genero}</small>
                </div>
                <div className="card-back">
                  <a href="/#" className="a">Agregar a Carrito</a>
                  <a href="/#" className="a"> Ver Detalles</a>
                </div>
                <ItemCount stock={10}/>
              {/* <div className="item-card-detail item-card-price">
                <h3 className='small'>${props.precio}</h3>
                
                <button className='btn-MasInfo'>Mas Informacion</button>
              </div> */}
            </div>               
        </div>
      </div>
  )
}

export default ItemCard;