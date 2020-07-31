import React,{useState,useEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import Home from './components/pages/Home';
//import About from './components/pages/About';
//import Contact from './components/pages/Contact';
//import Navbar from './components/pages/layout/Navbar';
//import Pagenotfound from './components/pages/Pagenotfound';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/pages/layout/Header';
import Recipes from './components/pages/Recipes';
import './components/pages/layout/Home.css';
import Axios from 'axios';

function App() {

  
  const [search , setSearch] = useState("chiken");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = 'f5009e28';
  const APP_KEY = '64a03391a43da0b52714fb3e50045c0e';
  
  useEffect( ()=>{
     getRecipes();
  }, []);

  const getRecipes = async () =>{
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    //console.log(res);

    setRecipes(res.data.hits);

  }
  const onInputChange = e => { 
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <Header search= {search} onInputChange = {onInputChange} />
      <div className = "container">
      <Recipes recipes={recipes} />
      </div>
      


    </div>



  );
}

export default App;
