import React, { Component } from "react";
import GetRecipeButton from "../components/GetRecipeButton";
import Recipe from "../components/Recipe";
import Recipes from "./../Recipes";

class RecipesGenerator extends Component {
  constructor() {
    super();

    this.state = {
      number: null,
      previewRecipe :null
    };

    this.newRecipehandler = this.newRecipehandler.bind(this);
    this.previewRecipehandler = this.previewRecipehandler.bind(this);
  }

  newRecipehandler() {
    this.setState({
      previewRecipe : this.state.number,
      number: Math.round(Math.random() * 11 ),
     
    })  
  }
  previewRecipehandler() {
    this.setState({
      
      number: this.state.previewRecipe
     
    })  
  }

  render() {

    
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
        <button type="button" name="" id="" className="btn btn-primary btn-sm previous" onClick={this.previewRecipehandler}>Previous</button>
        <h1 className="letter">¿Qué cenamos?</h1>
        <h3 className="letter">¿Cansado de hacer esa misma pregunta?,</h3>
        <h3 className="letter">haga clic para obtener una receta al azar</h3>
        <GetRecipeButton action={this.newRecipehandler} />
        <Recipe 
        data={Recipes}
        number={this.state.number}
        />
      </div>
    );
  }
}

export default RecipesGenerator;
