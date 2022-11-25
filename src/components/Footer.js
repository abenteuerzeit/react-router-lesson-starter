import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {

  // Get the history object
  const historyObject = useHistory();


  const goBack = () => {
    // imperatively redirect back
    historyObject.goBack();

  }

  const goForward = () => {
    // imperatively redirect forward
    historyObject.goForward();
    
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
