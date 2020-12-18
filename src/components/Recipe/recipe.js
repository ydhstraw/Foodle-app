import React, {useState} from 'react';
import { useStateValue } from '../../StateProvide';
import RecipeDetails from './recipe-details';
let idnum=1;
const Recipe = ({recipe}) => {
    const [{basket},dispacth]= useStateValue();
console.log(basket);
const addToBasket = ()=>{
    idnum=idnum+1;
    dispacth({
        type: 'ADD_TO_BASKET',
        item:{
            id: idnum, 
            label : label,
            image : image,
            url : url,
            ingredients: ingredients,
            source: source,
            calories: calories,
            totalWeight: totalWeight
        },
    });
};

const[show, setShow] = useState(false)
const[show2, setShow2] = useState(false)
const {label, image, url, ingredients, source, calories, totalWeight} = recipe.recipe;
    return (
        <div className="recipe">

            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <button onClick={addToBasket}>Add to Foodmark</button>
            <button onClick={() => setShow2(!show2)}>Food Info</button>
            {show2 &&(
                <div className="ingredient-list">
                    <li>Calories : {calories} kcal</li>
                    <li>Total Weight : {totalWeight} g</li>
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

export default Recipe;
