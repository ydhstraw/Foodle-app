import React from 'react';
import { useStateValue } from '../../StateProvide';
import FavoriteProduct from './favoriteproduct';

function Favorite ()  {
    const [{basket}]= useStateValue();


    return (
        <div className="App" >
            <div className='recipes'>
            {basket.map(item=>(
                <FavoriteProduct
                key={item.id}
                id={item.id}
                label={item.label}
                image={item.image}
                ingredients={item.ingredients}
                url={item.url}
                source={item.source}
                calories={item.calories}
                totalWeight={item.totalWeight}
                />
            ))}
             </div>
        </div>
    );
};

export default Favorite;
