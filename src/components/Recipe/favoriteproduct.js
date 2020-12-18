import React, { useState } from 'react';
import RecipeDetails from './recipe-details';

const FavoriteProduct =({image,label,ingredients,url, source, calories, totalWeight}) => {
    const[show, setShow] = useState(false)
    const[show2, setShow2] = useState(false)

    return (
        <div className="recipe" >
            <h2>{label}</h2>
            <img src={image} alt={image}/>
            <button onClick={() => setShow2(!show2)}>Food Info</button>
            {show2 &&(
                <div className="ingredient-list">
                    <li>Calories : {calories} kcal</li>
                    <li>Weight : {totalWeight} g</li>
                </div>
            )}
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show &&<RecipeDetails ingredients={ingredients}/>}
            <a href={url} target="_blank" rel="noopener noreferrer">
                Methods & More
            </a>
            <h3>Source: {source}</h3>
        </div>
    );
};

export default FavoriteProduct;