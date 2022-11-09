// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{ useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom"

function App() {

  const [mode, setmode]=useState('light')  //Wheather darkmode is enable or not
  const [modetext, setmodetext]=useState('Enable Dark Mode')  //Wheather darkmode is enable or not
  const [alert,setalert]=useState(null)

  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      setmodetext('Enable Light Mode')
      document.body.style.backgroundColor='#142056';//#212529
      showalert("Dark mode has been enabled","success")
      document.title="TextUtils-Dark"
    }else{
      setmode("light")
      setmodetext('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success")
      document.title="TextUtils-Dark"
    }
  }
  

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
   <>
   {/* <Router> */}
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} modetext={modetext} />
<Alert alert={alert}/>
<div className="container my-3">
<Textform heading="Enter text to analyze"  mode={mode} showAlert={showalert} />

{/* <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showalert} />}>
            </Route>
          </Routes>
</div> */}

</div>
{/* // </Router>s */}
   
   </>
  );
}

export default App;
