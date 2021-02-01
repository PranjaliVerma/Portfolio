import "./App.css";
import Navbar from "./components/js/Navbar";
import Home from "./components/js/Home";
import Projects from "./components/js/Projects";
import About from "./components/js/About";
import Loader from "./components/js/LoaderPage";
import Skills from "./components/js/Skills";
import Contact from "./components/js/Contact";
import Map from "./components/js/Map";
import Education from "./components/js/Education";
import {useSelector,useDispatch} from 'react-redux';
import displayUsers from "./actions/displayData";
import React, { useEffect } from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'; 

function App() {
 let loaderVisible=0
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(displayUsers())
  },[])

  const disData = useSelector(state=>state.DATA)
  const users = disData.MyData
  if(users.length===0)
    ++loaderVisible
  
  return (
    loaderVisible>0?<Loader/>:<>
     <Navbar />
     <Router>
            <Switch>
              <Route exact path="/Map" component={Map}></Route>
              <Route exact path="/">
                  <div style={{ display: 'flex', flexDirection:'column'}}>
                      <Home  data={users.basics} />
                      <Skills data={users.skills} />
                      <About data={users.basics} dob={users.awards}/>
                      <Education data={users.education} />
                      <Projects data={users.projects}/>
                      <Contact data={users.basics} />
                  </div>
              </Route>
            </Switch>
   </Router>
</>
  );
}

export default App;

