import ItemCount from '../ItemCount/ItemCount';

const CardDetail = (titulo, autor, img, img, genero, precio) => {
  return (
          <div className="cardDetail">
                <div className="cardDetail_header">
                  <h2 className="h2">{titulo}</h2>
                  <h2 className="h2">{autor}</h2>
                </div>
                <div className="cardDetail_img">
                  <img src={img} alt="imagen"></img>
                  <br/>
                  <small className="genero">{genero}</small>
                </div>
                <div className="cardDetail_precio">
                  <h4 className="cardDetail-precio">$ {precio}</h4>
                  <ItemCount stock={10}/>
                </div>
            </div>               
  )
}

export default CardDetail