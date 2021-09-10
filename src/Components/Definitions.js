import React from 'react';
import './Definitions.css';

const Definitions = ({meanings, word, LightTheme, category}) => {
    return (
        <div className="meanings">
            {meanings[0] && word && category === "en" &&
            (
                <audio className="audio" 
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                controls
                >
                Your browser does not support the audio tag.
                </audio>
            )}             
            {word === "" ? (
                <span className="subtitle" style={{
                backgroundColor: LightTheme ? "#eaebe4" : "#323f4b",
                color: LightTheme ? "#323f4b" : "#F5DEB3",
                  }}> 
                <b> How to use: </b>
                1. Select a language
                <br/>
                2. Enter a word in the appropriate script. 
                <br/>
                <i> Eg: Use 한글 to search a word in Korean </i>
                </span>
            ):(
                meanings.map((mean) => 
                mean.meanings.map((item) =>(
                item.definitions.map((def) => (
                <div className="dictdef"
                style={{
                    backgroundColor: LightTheme ? "#eaebe4" : "#323f4b",
                    color: LightTheme ? "#323f4b" : "#f5f7fa",
                  }}> 
                    <b > {def.definition} </b>
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                    {def.example ? (
                        <span className="example">
                           <b> Example </b>: {def.example}
                        </span>
                    )
                    :(<span> </span>)}
                    
                    {def.synonyms[0] ? (
                        <span> <b>Synonyms </b>: {def.synonyms.map((s) => `${s}, `)}
                        </span>
                    ):(<span> </span>)}
                </div>
                ))
                ))
                )
            )
            }
        </div>

    );

};

export default Definitions;