import React, { Component } from 'react';
import './App.css';
import axios from "axios";



class App extends Component {
  state = {
    meal: {},
    mealVideo: "",
    mealIngredients: []
  };

  handleGetMeal = () => {
    axios.get("https://themealdb.com/api/json/v1/1/random.php")
      .then(res => {
        var videoStr = res.data.meals[0].strYoutube;
        var index = videoStr.indexOf("v=");
        var videoID = videoStr.slice(index + 2);
        var mealIngreArr = [];

        for (let i = 1; i <= 20; i++) {
          var strIngre = "strIngredient" + i;
          var strMeasure = "strMeasure" + i;
          if (res.data.meals[0][strIngre]) {

            // if (res.data.meals[0][strMeasure]) { mealIngreArr.push(res.data.meals[0][strIngre] + " - " + res.data.meals[0][strMeasure]); }
            // else {
            //   mealIngreArr.push(res.data.meals[0][strIngre])
            // }

           res.data.meals[0][strMeasure] ? mealIngreArr.push(res.data.meals[0][strIngre] + " - " + res.data.meals[0][strMeasure])
           : mealIngreArr.push(res.data.meals[0][strIngre])
          }
        }

        console.log(res.data.meals[0]);

        this.setState({
          meal: res.data.meals[0],
          mealVideo: videoID,
          mealIngredients: mealIngreArr
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (<div className="card text-center">

      <div className="card-header">
        <h1>Random Meal Generator</h1>
      </div>

      <div className="card-body">
        <h5 className="card-title">Don't know what to eat?</h5>
        <p className="card-text">Click button below to generate a random meal with cooking instructions</p>
        <button className="btn btn-primary" onClick={this.handleGetMeal}>Get Meal</button>
      </div>



      <div className="card-footer">

        <div className="card mb-3">
          <div className="card-body">
            <h4 className="card-title">{this.state.meal.strMeal}</h4>
            <img width="560" height="315" src={this.state.meal.strMealThumb} alt="meal" className="mb-4" />
            <p><strong>Category: </strong><span id="category">{this.state.meal.strCategory}</span></p>
            <p><strong>Area: </strong><span id="area">{this.state.meal.strArea}</span></p>
            <p><strong>Tags: </strong><span id="tags">{this.state.meal.strTags}</span></p>
            <p><strong>Ingredients:</strong></p>
            <ul id="ingredients">
              { this.state.mealIngredients.map ( (ingre,index) => <li key={index+1}>{ingre}</li> ) }
            </ul>
            <p><strong>Cooking Instructions:</strong></p>
            <p id="instructions">{this.state.meal.strInstructions}</p>
            <p><strong>Video Recipe:</strong></p>
            <iframe width="560" height="315" title="video receipt" src={"http://www.youtube.com/embed/" + this.state.mealVideo}
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

      </div>




    </div>
    );
  }
}

export default App;
