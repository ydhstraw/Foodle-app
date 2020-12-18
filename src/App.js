import React, {Fragment} from "react";
import './App.css';
import Navbar from './components/NavBar/navbar';
import Type from './type';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/about';
import Home from './home';
import Favorite from './components/Recipe/favorite';
import Footer from "./components/footer/footer";
function App  ()  {
  
  return (
    <Fragment>
      <Router>
       <Navbar />
       <Switch>
       <Route  path="/" exact component={Home} />
         <Route  path="/home" exact component={Home} />
         <Route path="/type" exact component={Type} />
         <Route  path="/favorite" exact component={Favorite} />
         <Route path="/about" exact component={About} />
       </Switch>
       <Footer />
    </Router>
    </Fragment>
  );
}

export default App;
