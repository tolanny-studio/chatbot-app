import ChatInput from "./components/ChatInput"
import ChatMessage from "./components/ChatMessage"
import {useState } from "react"
import data from "./data"


function App() {

  // Getting the data as a single source of truth.
  const [chatMessages,setChatMessages] = useState(data)
  
  return (
    <div className="app-container">
      <ChatMessage chatMessages={chatMessages}/>
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages ={setChatMessages}
       />
    </div>
  )
}

export default App
