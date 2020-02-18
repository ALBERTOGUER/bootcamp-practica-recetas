import React from "react";


const GetRecipeButton = (props) =>{
  return (
    <div>
      <button
        className="btn  btn-outline-secondary btn-lg mt-3"
        onClick={props.action}
      >
        OBTENER RECETA <img className="mb-1" src="./img/fruta.png" alt="" />
      </button>
    </div>
  );
};

export default GetRecipeButton;
