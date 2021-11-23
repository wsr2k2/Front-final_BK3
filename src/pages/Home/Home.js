import React from 'react';
import List from '../../components/structure/List/List';
import './Home.css';

const Home = () => {
  return (
    <div className="container home">
      <h1 className="text-center">API Sabores do Mundo</h1>
      <List/>
    </div>
  )
}

export default Home
