import { useEffect, useRef} from "react"
import robot from "../assets/robot.png"
import user from "../assets/user.png"

const ChatMessage = ({chatMessages}) => {

  // referencing the chat-messages container
  const chatMessagesRef = useRef(null)

  // using useEffect hook to auto scroll the chat-messages container, whenever there is a change in the chatMessages data 
  useEffect(()=>{
    const chatMessagesEle = chatMessagesRef.current
    if(!chatMessagesEle) return
    chatMessagesEle.scrollTop = chatMessagesEle.scrollHeight
  },[chatMessages])

  return (

    <div className="chat-messages" ref={chatMessagesRef} >
      {
        chatMessages.map((chatMessage)=>{
          const {id,message,sender} = chatMessage
          // checks the sender of the message for proper layout
          if(sender === robot){
            return(
              <div key={id} className="chat-message-chatbot">
                <img src={robot}/>
                <div className="chat-message-text">{message}</div>
              </div>
            )
          }else{
            return(
              <div key={id} className="chat-message-user">
                <div className="chat-message-text">{message}</div>
                <img src={user}/>
              </div>
            )
          }
            
          })
      }
    </div>
    
  )
}

export default ChatMessage