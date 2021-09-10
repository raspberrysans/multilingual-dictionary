import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, withStyles, Switch } from '@material-ui/core';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Definitions from './Components/Definitions';
import { grey } from "@material-ui/core/colors";
function App() {

  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  //deafult value of the language category is English
  const [category, setCategory] = useState("en");
  //switching between dark and lightmodes
  const [LightMode, setLightMode] = useState(false);

  const GraySwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  const dictionaryapi = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeanings(data.data);
    }
    catch (err) {
      console.error(err);
    }
  };
  console.log(meanings);

  useEffect( () => {
    dictionaryapi();
  },[word, category]);

  return (
    <div className="App"
    style={{
      backgroundColor: LightMode ? "#F5DEB3":"#1f2933",
    }}
    >
      <Container maxWidth="md" classname="AppContainer">
        <div> 
          <GraySwitch checked={LightMode} onChange={()=> setLightMode(!LightMode)} /> 
        </div>
        <Header category={category} setCategory={setCategory}
        word={word} setWord={setWord} 
        setMeanings={setMeanings} LightTheme={LightMode} />
        {meanings && <Definitions meanings={meanings} 
        word={word} category={category} LightTheme={LightMode} />}  
        <Footer LightTheme={LightMode} />    
        </Container>
        
    </div>
  );
}

export default App;
