import React from "react";
import './App.scss'
import Cursor from './components/Cursor/Cursor'
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header';
import Footer from "./components/Footer/Footer";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Developer from './components/Pages/Developer/Developer'
import Dancer from './components/Pages/Dancer/Dancer'
import Contact from './components/Pages/Contact/Contact';
import Error from './components/Pages/Error'

const App = ({ cursor }) => {
  
  const location = useLocation()

  return (
    <div>
     {/*  <Cursor cursor={cursor} onMouseMove = { (e) => {
  const cursor = document.querySelector(".cursor")
  cursor.style.left = `${e.pageX}px`
  cursor.style.top = `${e.pageY}px`
  }}/> */}
    <div className="App">
    <Header />
      <div>
        <AnimatePresence exitBeforeEnter
            initial={false}>
          <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/developer" component={Developer} />
                <Route exact path="/dancer" component={Dancer} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="*" component={Error}/>
          </Switch>
        </AnimatePresence>
      </div>     
      </div>
      <Footer />
      </div>
  );
};

export default App;
