import React from "react";
import io from "socket.io-client";

import BottomBar from "./bottom_bar";
import "../../styles/chat.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      content: "",
      name: this.props.name,
    };
  }

  componentDidMount() {
    // this.socket = io(config[process.env.NODE_ENV].endpoint);
    this.socket = io();
    // Load the last 10 messages in the window.
    this.socket.on("init", (msg) => {
      let msgReversed = msg.reverse();
      this.setState(
        (state) => ({
          chat: [...state.chat, ...msgReversed],
        }),
        this.scrollToBottom
      );
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on("push", (msg) => {
      this.setState(
        (state) => ({
          chat: [...state.chat, msg],
        }),
        this.scrollToBottom
      );
    });
  }

  // Save the message the user is typing in the input field.
  handleContent(meeting) {
    this.setState({
      content: meeting.target.value,
    });
  }

  handleSubmit(meeting) {
    // Prevent the form to reload the current page.
    meeting.preventDefault();

    // Send the new message to the server.
    this.socket.emit("message", {
      name: this.state.name,
      content: this.state.content,
    });

    this.setState((state) => {
      // Update the chat with the user's message and remove the current message.
      return {
        chat: [
          ...state.chat,
          {
            name: state.name,
            content: state.content,
          },
        ],
        content: "",
      };
    }, this.scrollToBottom);
  }

  // Always make sure the window is scrolled down to the last message.
  scrollToBottom() {
    const chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
  }

  render() {
    return (
      <div className="chat-container">
        <h1>Live Chat</h1>
        <div id="chat">
          {this.state.chat.map((el, index) => {
            return (
              <div key={index} id="msg">
                <span id="msg-author">{el.name}: </span>
                <span id="msg-content">{el.content}</span>
              </div>
            );
          })}
        </div>
        <BottomBar
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default Chat;
