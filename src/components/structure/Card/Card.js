import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const italian = props.data;
  return (
    <Link to={`/italianview/${italian._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="text-center">{ italian.nome }</h5>
          <h6 className="text-center"><img src={italian.imagem}  width="50%" alt={italian.nome}/></h6>
        </div>
      </div>
    </Link>
  )
}

export default Card
