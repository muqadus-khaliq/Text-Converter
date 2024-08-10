import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
 function App() {
 
  
   
 
  const [mode, setMode] = useState( `navbar navbar-dark bg-danger`)
  const [alert, setAlert] = useState(null)

const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  },1000);
}

  return (
     <> 
     <Navbar title="TextUtills" home="Home" About="About"  mode={mode}/> 
   <Alert Alert={alert}/> 
     {/* <Navbar   />  */}
      <TextForm showAlert={showAlert} heading= "enter text here:"  /> 
      {/* <TextForm   />  */}
    </>
  );
}

export default App;
