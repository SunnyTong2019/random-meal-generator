import React from 'react';
import './App.css';

function App() {
  return (<div className="card text-center">

    <div className="card-header">
      <h1>Random Meal Generator</h1>
    </div>

    <div className="card-body">
      <h5 className="card-title">Don't know what to eat?</h5>
      <p className="card-text">Click button below to generate a random meal with cooking instructions</p>
      <a href="#" className="btn btn-primary">Get Meal</a>
    </div>

    <div className="card-footer">

      <div className="card mb-3">
        <img src="..." className="card-img-top" alt="meal" />
        <div className="card-body">
          <h5 className="card-title">Meal Title</h5>
          <p><strong>Category: </strong><span id="category">Vegetarian</span></p>
          <p><strong>Area: </strong><span id="area">Moroccan</span></p>
          <p><strong>Tags: </strong><span id="tags">Vegetarian, Spicy</span></p>
          <p><strong>Ingredients:</strong></p>
          <ul id="ingredients">
            <li>Small Potatoes - 650g/1lb 8 oz</li>
            <li>Harissa Spice - 1 tsp</li>
          </ul>
          <p><strong>Cooking Instructions:</strong></p>
          <p id="instructions">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p><strong>Video Recipe:</strong></p>
          <iframe width="560" height="315" title="video receipt" src="https://www.youtube.com/embed/iKy57dXLjVQ"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

    </div>

  </div>
  );
}

export default App;
