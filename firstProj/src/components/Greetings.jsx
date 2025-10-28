import { useState } from "react";

function Greeting() {
  // Step 1: Create a state variable
  const [message, setMessage] = useState("Hello Divya 😊");

  // Step 2: Create a function to update the message
  function changeMessage() {
    setMessage("You clicked the button! 😊");
  }

  // Step 3: Return JSX
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  );
}

export default Greeting;