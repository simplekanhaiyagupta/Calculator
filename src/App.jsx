import "bootstrap/dist/css/bootstrap.min.css";
import style from './App.module.css';
// import ButtonConta from "./Buta";
import { useState } from "react";
import ButtonContainer from './components/ButtonContainer';
import Dis from './components/Dis';

function App() {
   
  const  [calVal, setCalval]  = useState("");

const  OnButtonClick =(ButtonText) => {
  if(ButtonText === 'c'){
    setCalval("");

  }else if(ButtonText === '='){
    const result = eval(calVal);
    setCalval(result);

  }
  else{
    const newDisplay = calVal + ButtonText;
    setCalval(newDisplay);
  }
};
  return (
    <center>  
  <br></br>
    <h1> CALCULATOR  </h1><br></br>
    <div className={style.calculator}>
    <Dis  displayVal={calVal}/>
    <ButtonContainer OnButtonClick={OnButtonClick} />
        </div>
    </center>
  );
}

export default App;
