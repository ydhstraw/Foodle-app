import React, {useEffect, useState} from "react";
import Axios from "axios"; 
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Recipe from './components/Recipe/recipe';
import Alert from './components/alert';

const Home = () => {
    const [query, SetQuery] = useState("ikan");
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
  
    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    useEffect(() => {
      const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const getData = async() => {
        if(query !== ""  ){
          const result = await Axios.get(url);
          if(!result.data.more) {
            return setAlert('No Food with such name');
          }
          setRecipes(result.data.hits);
          console.log(result);
          setAlert("");
          SetQuery("");
        }
      };
      getData();
    },[query]);
    
    const onChange = (e) => {
      setSearch(e.target.value);
      console.log(search);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      SetQuery(search);
      setSearch('');
      console.log(query);
    };

    return(
      <div className="App">
        <form className="search-form" onSubmit={onSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <input type="text" placeholder="Type here to search" autoComplete="off" onChange={onChange} value={search}/>
          <input type="submit" value="search"/>
        </form>
      <div className="recipes">
        {recipes.length !==[] && recipes.map(recipe => 
        <Recipe key={uuidv4
        ()} recipe={recipe}/>)}
            
      </div>
    </div>
  );
};

export default Home;