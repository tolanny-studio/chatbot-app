
import robot from "../assets/robot.png"
// import user from "../assets/user.png"

const ChatMessage = ({message,sender}) => {
  

  const  checkSender = () => sender === robot ?  true  : false

  return (

      <div className={checkSender() ? 'chat-message-chatbot' : "chat-message-user"}>

      {checkSender() ? 
        <>
        <img src={sender}/>
        <div className="chat-message-text">{message}</div>
        </> : 
        <>
        <div className="chat-message-text">{message}</div>
        <img src={sender}/>
        </>
      }
      
    </div>
    
  )
}

export default ChatMessage