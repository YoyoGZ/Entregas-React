import ItemCount from "./ItemCount"

const CardDetail = ({id, titulo, autor, img, genero, precio, stock}) => {
  return (
          <div className="cardDetail">
                <div className="cardDetail_header">
                  <p className='h4'> Nro de Catalogo: {id}</p>
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
                  <p className="h4"> Cantidad Disponible = {stock}</p>
                  <ItemCount stock={10}/>
                </div>
            </div>               
  )
}

export default CardDetail