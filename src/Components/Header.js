import React from 'react';
import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import languages from "../data/categories";
import { debounce } from "lodash";
import "./Header.css";
const Header = ({
    category,
    setCategory,
    word,
    setWord,
    setMeanings,
    LightTheme,
}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#F5DEB3",
            },
          type: LightTheme ? "light" : 'dark',
        },
      });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    }

    const handleText = debounce((text) => {
        setWord(text);
    }, 500);

    return (
        <div className="header" >
            <span className="title" align="center"
            style={{
                color: LightTheme ? "#323f4b" : "#F5DEB3",
                  }}>
                {word ? word : (<span> m-Dictionary </span>)}
            </span>
        
            <div className="inputs">

            <ThemeProvider theme={darkTheme}>

            <TextField id="standard-basic" label="Search for a word" 
            className="search"
            onChange={(e) => handleText(e.target.value)}
            />
            <br/>

            <TextField
            className="select"
            id="standard-select-currency"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            >
            {languages.map((option) => (
                <MenuItem key = {option.label} value={option.label}>
                    {option.value}
                </MenuItem>
            ))
            }
        </TextField>
        
            </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;