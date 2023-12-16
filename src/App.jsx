import React from "react";
import "./App.css";
import Storage from './Storage';

function App() {
  const [topics, SetTopics] = Storage('topic', '')
  return(
    <>
    <input type="text" value={topics} onChange={(e) => SetTopics(e.target.value)}/>
    
      </>
  );
}

export default App