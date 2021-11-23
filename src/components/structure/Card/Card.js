import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const perso = props.data;
  return (
    <Link to={`/view/${perso._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ perso.nome }</h5>
          <span className="badge bg-primary">{ perso.imagemUrl }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
