import React from 'react';
import {v4 as uuidv4} from 'uuid';

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredients => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li>{ingredients.text}</li>
                <li>Weight - {ingredients.weight} g</li>
            </ul>
        );
    });
};

export default RecipeDetails;