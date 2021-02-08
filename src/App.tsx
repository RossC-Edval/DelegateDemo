import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShapeRenderer from './ShapeRenderer';
import { SquareA } from './Shapes/SquareA';
import { CircleB } from './Shapes/CircleB';
import { BaseShape } from './Shapes/BaseShape';

function App() {
  const del1 = new BaseShape(new CircleB());
  const del2 = new BaseShape(new SquareA());

  return (
    <div className="App">
      <ShapeRenderer delegate={del1}/>
      <ShapeRenderer delegate={del2}/>
    </div>
  );
}

export default App;
