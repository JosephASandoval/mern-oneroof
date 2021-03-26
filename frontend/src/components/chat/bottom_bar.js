import React from "react";

export default function BottomBar(props) {
  return (
    <div className="send-box">
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          id="chat-type-box"
          onChange={props.handleContent}
          value={props.content}
          placeholder="Write a message..."
        />
        <span id="msg-reminder">press Enter to send</span>
      </form>
    </div>
  );
}
