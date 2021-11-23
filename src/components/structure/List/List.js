import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Api from '../../../api/api'

const List = () => {
  const [italians, setItalians] = useState([]);
  
  useEffect(() => {
    getItalians();
  }, []);
  
  const getItalians = async () => {
    const response = await Api.fetchGetAll(); // requiscao do tipo GET para api
    const data = await response.json(); // API retorna um array com dados
    setItalians(data); // atualizamos o nosso objeto do estado com o array vindo da api backend
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {
        italians.map((italian, index) => ( // iterar o array de pratos e para cada prato chamar um componente card
          <Card data={italian} key={index}/>
        ))
      }
    </div>
  )
}

export default List
