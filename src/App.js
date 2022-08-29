import React, { useState } from "react";
import "./styles.css";

//var userName = "Ganesh";
//var userName = prompt("enter username");
const emojiDict = {
  "😀": "HappyFace",
  "🤣": "Rolling on the Floor Laughing",
  "😞": "Disappointed Face",
  "✈️": "Airplane",
  "📓": "Notebook",
  "🌏": "Globe",
  "🌼": "Flower",
  "🎁": "Gift",
  "🛕": "HinduTemple",
  "🚒": "FireEngine"
};

//we converted emojiDict object to Array
var emojiArraykeys = Object.keys(emojiDict);

export default function App() {
 
  var [userInput, setUserInput] = useState("");
  function setEventHandler(event) {
    //console.log(event.target.value);
    var emojiInput = event.target.value;

    var meaning = emojiDict[emojiInput];

    if (userInput === undefined) {
      meaning = "we dont have this in our database";
    }

    //console.log(meaning);
    setUserInput(meaning);
  }

  function emojiClicked(items) {
    var meaning = emojiDict[items];
    //console.log(items);
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input onChange={setEventHandler} />
      <h2>{userInput}</h2>

      <h3>Emojis we Know</h3>

      {emojiArraykeys.map((items) => {
        return (
          <span
            onClick={() => emojiClicked(items)}
            key={items}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {items}
          </span>
        );
      })}
    </div>
  );
}
