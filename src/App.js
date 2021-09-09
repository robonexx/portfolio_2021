import React from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from './components/Toggle/UseDarkMode'
import { GlobalStyles } from './components/Themes/GlobalStyle'
import { lightTheme, darkTheme } from "./components/Themes/Themes"
import ThemeToggle from "./components/Toggle/Toggler"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import Header from './components/Header';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Developer from './components/Pages/Developer/Developer'
import Dancer from './components/Pages/Dancer/Dancer'
import Contact from './components/Pages/Contact/Contact';

const App= () => {

  

  const fade = useSpring({from: {opacity: 0}, opacity: 1});
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  if(!mountedComponent) return <div/>

  return (
    <Router>
       <animated.div className="App" style={fade}>
        <ThemeProvider theme={themeMode}>
          <ThemeToggle theme={theme} toggleTheme={themeToggler} />
            <GlobalStyles/>
              <Header />
                <div className="content">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    {/* <Route exact path="/developer" component={Developer} />
                    <Route exact path="/dancer" component={Dancer} /> */}
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                  </div>
            </ThemeProvider> 
         
      
      </animated.div>
      </Router>
  );
};

export default App;
