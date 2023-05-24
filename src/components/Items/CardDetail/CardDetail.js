import ItemCount from '../ItemCount/ItemCount';

const CardDetail = ({titulo, autor, img, genero, precio}) => {
  return (
          <div className="cardDetail">
                <div className="cardDetail_header">
                  <h2 className="h2">{titulo}</h2>
                  <h2 className="h2">{autor}</h2>
                </div>
                <div className="cardDetail_img">
                  <img src={img} alt="imagen"></img>
                  <br/>
                  <small className="detail-genero">{genero}</small>
                </div>
                <div>
                  <h4 className="cardDetail_precio"> Precio: $ {precio}</h4>
                  <ItemCount stock={10}/>
                </div>
            </div>               
  )
}

export default CardDetail