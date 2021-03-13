import React from "react";
import style from "./recipe.module.css";


const Recipe = ({title, ingredients, calories, image}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p><strong>Calories per whole meal:</strong> {Math.round(calories)}</p>
            
        </div>
    )
}

export default Recipe;