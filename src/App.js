import React from "react";
import Cursor from './components/Cursor/Cursor'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import Header from './components/Header';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Developer from './components/Pages/Developer/Developer'
import Dancer from './components/Pages/Dancer/Dancer'
import Contact from './components/Pages/Contact/Contact';
import Error from './components/Pages/Error'

const App = ({cursor}) => {
  
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  
 /*  onMouseMove = { e => {
  const cursor = document.querySelector(".cursor")
  cursor.style.left = `${e.pageX}px`
  cursor.style.top = `{e.pageY}px`
  }} */

  return (
    <Router>
      <Cursor cursor={cursor} onMouseMove = { e => {
  const cursor = document.querySelector(".cursor")
  cursor.style.left = `${e.pageX}px`
  cursor.style.top = `{e.pageY}px`
  }}/>
       <animated.div className="App" style={fade}>
              <Header />
                <div className="content">
          <Switch>
            
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    {/* <Route exact path="/developer" component={Developer} />
                    <Route exact path="/dancer" component={Dancer} /> */}
              <Route exact path="/contact" component={Contact} />
              <Route exact path="*" component={Error}/>
                  </Switch>
                  </div>
           {/*  </ThemeProvider> */} 
         
      
      </animated.div>
      </Router>
  );
};

export default App;
