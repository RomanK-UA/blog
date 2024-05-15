import { useState } from 'react'
import Home from "./pages/Home"
import './index.css'
function App() {
  const [text, setText] = useState("Click");
  async function handleClick() {
    const response = await fetch("http://localhost:3000/");
    const res = await response.text();
    setText(res);
  }

  async function handlePost() {
    const response = await fetch("http://localhost:3000/post", {
      method: "Post",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify()
    })

    if(response.ok) {
      const responseData = await response.json(); // Parse response JSON
      console.log("Response:", responseData);
    } else {
      console.error("Request failed with status:", response.status);
    }
  }

  return (
    <>
      <Home />
      <button onClick={handleClick}>
          {text}
      </button>
    </>
  )
}

export default App
