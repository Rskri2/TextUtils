import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Route,
  Routes
}from 'react-router-dom'

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) =>{
    setalert({
      message,
      type
    })
   setTimeout(()=>{
    setalert(null)
   },2000)
  }
  const toogleMode = (modeColor) =>{
    if(document.body.classList.contains("bg-"+modeColor)){
      clearMode();
      setmode('light')
      document.body.classList.add('bg-light');
    }
    else{
    clearMode();
    setmode(modeColor);
    document.body.classList.add("bg-"+modeColor);
    }
    showAlert("The mode has been successfully changed","success")
  }
  const clearMode = () =>{
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtills" mode={mode} toogleMode={toogleMode}/>
     <Alert alert= {alert}/>
     <div className="container my-3">
      <Routes>
              <Route exact path="/about" element= {<About mode= {mode}/>} >
              </Route>
              <Route exact path="/" element={ <TextForm heading= "Try TextUtils -word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert}/>}>
             </Route>
      </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;

