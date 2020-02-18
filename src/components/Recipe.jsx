import React from "react";

const Recipe = props => {
  return (
    <div className="mt-5">
      <div className="row letter ">
        <div className="col-4 ">
          {props.number !== null && (
            <img
              className="mb-1 image"
              src={props.data[props.number].mealNameThumb}
              alt=""
            />
          )}
        </div>
        <div className="col-6">
          {props.number !== null && (
            <h5>{props.data[props.number].mealName}</h5>
          )}
          {props.number !== null && (
            <p>{props.data[props.number].instructions}</p>
          )}
        </div>
      </div>

      <div>
        <div >
          {props.number !== null &&
            props.data[props.number].ingredient1 !== "" && (
              <h4>Ingredientes:</h4>
            )}
          
          <ul id="lista" >
            {props.number !== null &&
              props.data[props.number].ingredient1 !== "" && (
                <li>{props.data[props.number].ingredient1}</li>
              )}
            {props.number !== null && props.data[props.number].ingredient2 !== "" && (
              <li>{props.data[props.number].ingredient2}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient3 !== "" && (
              <li>{props.data[props.number].ingredient3}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient4 !== "" && (
              <li>{props.data[props.number].ingredient4}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient4 !== "" && (
              <li>{props.data[props.number].ingredient4}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient5 !== "" && (
              <li>{props.data[props.number].ingredient5}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient6 !== "" && (
              <li>{props.data[props.number].ingredient6}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient7 !== "" && (
              <li>{props.data[props.number].ingredient7}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient8 !== "" && (
              <li>{props.data[props.number].ingredient8}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient9 !== "" && (
              <li>{props.data[props.number].ingredient9}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient10 !== "" && (
              <li>{props.data[props.number].ingredient10}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient11 !== "" && (
              <li>{props.data[props.number].ingredient11}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient12 !== "" && (
              <li>{props.data[props.number].ingredient12}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient13 !== "" && (
              <li>{props.data[props.number].ingredient13}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient14 !== "" && (
              <li>{props.data[props.number].ingredient14}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient15 !== "" && (
              <li>{props.data[props.number].ingredient15}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient16 !== "" && (
              <li>{props.data[props.number].ingredient16}</li>
            )}
            {props.number !== null && props.data[props.number].ingredient17 !== "" && (
              <li>{props.data[props.number].ingredient17}</li>
            )}
          </ul>

          {props.number !== null  && (
              <video src={props.data[props.number].mealVideo} width="640" height="480" controls autoPlay></video>
            )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
