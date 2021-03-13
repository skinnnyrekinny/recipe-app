import './App.css';
import React, {useEffect, useState} from 'react';
import reactDom from 'react-dom';
import Recipe from './Recipe';
import logo from "./logo.png";

function App() {
  const APP_ID = '0674c4e2';
  const APP_KEY = 'b6d01f26f699b203dfcb143ce3c15355';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo"/>
        <form onSubmit={getSearch} className="form-search">
          <input type="text" className="input-search" value={search} onChange={updateSearch}/>
          <button type="submit" className="button-search">Search!</button>
        </form>
      <div className="recipes">
        {recipes.map(recipe => (
            <Recipe 
                    key={recipe.recipe.label} 
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    calories={recipe.recipe.calories} 
                    ingredients={recipe.recipe.ingredients}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
