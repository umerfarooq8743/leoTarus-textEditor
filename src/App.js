import './App.css';
import About from './component/About.jsx';
import Navbar from './component/Navbar.js';
import Textform from './component/Textform.js';
import React,{useState} from 'react'
import Alert from './component/Alert.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#16406a';
      showAlert("Dark mode has been Active","success");
      document.title='LeoTarus - Dark Mode';
      setInterval(() => {
        document.title='Install LeoTarus Now';
      }, 2000);
      setInterval(() => {
        document.title='LeoTarus';
      }, 4000);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Active","success");
      document.title='LeoTarus - Light Mode';
      setInterval(() => {
        document.title='Install LeoTarus Now';
      }, 2000);
      setInterval(() => {
        document.title='LeoTarus';
      }, 4000);
    }
  }
  return (
    <>
    <Router>
<Navbar title="leoTarus"   mode={mode} toggleMode={toggleMode}/>
<Alert  alert={alert}/> 
<div className="container">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Enter the text to analysis" mode={mode} />
          </Route>
        </Switch>
</div>
</Router>
    </>
  );
}

export default App;
