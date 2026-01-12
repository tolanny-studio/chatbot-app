import React, { useState } from 'react'
import user from '../assets/user.png'
import robot from '../assets/robot.png'

const ChatInput = ({setChatMessages}) => {


  // Initiating state for controlled input
  const [inputText,setInputText] = useState('')

  // Handling the click function when the message is sent
  const handleClick = (event)=>{
    event.preventDefault()
    
    if(!inputText) return

    // Creating a new object to update the chatMessages
    const newMessage ={
      id:crypto.randomUUID(),message:inputText,sender:user
    }
    setChatMessages((prevChat) => [...prevChat,newMessage ])


     // handles the reply of the chatbot
    const response = window.Chatbot.getResponse(inputText)

    if(!response) return
    // Creating a new object to update the chatMessages
      const robotMessage ={
      id:crypto.randomUUID(),message:response,sender:robot
    }
    setChatMessages((prevChat) => [...prevChat,robotMessage ])

     // clear the input field
    setInputText('')
  }

  const handleChange =(e)=>{
    setInputText(e.target.value);
    
  }


  return (
    <form>
      <input 
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={handleChange}
        value={inputText}
        />
      
      <button className='send-button' onClick={handleClick}>Message</button>
    </form>
  )
}

export default ChatInput