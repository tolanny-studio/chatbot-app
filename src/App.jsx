import ChatInput from "./components/ChatInput"
import ChatMessage from "./components/ChatMessage"
import robot from './assets/robot.png'
import user from './assets/user.png'
import { useEffect, useRef, useState } from "react"


function App() {

  const chatMessages = [
    {id:crypto.randomUUID(),message:"hello chatbot",sender:user},
    {id:crypto.randomUUID(),message:"Hello! How can I help you?",sender:robot},
    {id:crypto.randomUUID(),message:"can you get me todays date",sender:user},
    {id:crypto.randomUUID(),message:"Today is January 11",sender:robot}
    
  ]

  const [chatData,setChatData] = useState(chatMessages)
  const [inputText,setInputText] = useState("")

  const handleChatInput =(e)=>{
    setInputText(e.target.value);
  }

  const handleChatUpdate =(e)=>{
    e.preventDefault()
    if(!inputText) return
    const newMessage ={
      id:crypto.randomUUID(),message:inputText,sender:user
    }
    setChatData((prevChat) => [...prevChat,newMessage ])


    // handles the reply of the chatbot
    const response = window.Chatbot.getResponse(inputText)

    if(!response) return
      
      const robotMessage ={
      id:crypto.randomUUID(),message:response,sender:robot
    }
    setChatData((prevChat) => [...prevChat,robotMessage ])

    // clear the input field
    setInputText('')
    
  }


// The use effect establishes an auto-scroll effect in the chat-message container

const chatMessagesRef = useRef(null)


  useEffect(()=>{
    const chatMessagesEle = chatMessagesRef.current
    if(!chatMessagesEle) return
    chatMessagesEle.scrollTop = chatMessagesEle.scrollHeight
  },[chatData])


  return (
    <div className="app-container">

      <div ref={chatMessagesRef} className="chat-messages">
        {
          chatData.map((chatMessage)=>{
            const {id,message,sender} = chatMessage
            return (
              <ChatMessage key={id} message={message} sender={sender}/>
            )
          })
      }
      </div>
    

    <ChatInput handleChange={handleChatInput} handleClick={handleChatUpdate} value={inputText}/>
    </div>
  )
}

export default App
