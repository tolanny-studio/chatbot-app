import React from 'react'

const ChatInput = ({handleChange,handleClick,value}) => {

  return (
    <form>
      <input className="chat-input" placeholder="Send a message to Chatbot" size="30" onChange={handleChange} value={value} />
      
      <button className='send-button' onClick={handleClick}>Message</button>
    </form>
  )
}

export default ChatInput