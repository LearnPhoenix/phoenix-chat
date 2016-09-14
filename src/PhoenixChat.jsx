import React from 'react'
import { Socket } from "phoenix"
import style from './style.js'

export class PhoenixChatButton extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.toggleChat}
        style={style.chatButton}>
        <img
          src="https://github.com/LearnPhoenix/graphics/blob/master/phoenix-chat-icon.png?raw=true"
          style={style.chatImage} />
      </div>
    )
  }
}

export class PhoenixChatSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.closeChat = this.closeChat.bind(this)
  }

  componentDidUpdate() {
    if (this.props.messages.length > 0) {
      const lastMessage = this[`chatMessage:${this.props.messages.length - 1}`]
      this.chatContainer.scrollTop = lastMessage.offsetTop
    }
  }

  closeChat() {
    this.props.toggleChat()
  }

  render() {
    const list = !this.state.messages ? null : this.state.messages.map(({ body, id, from }, i) => {
      const right = from === "Client"

      return (
        <div
          ref={ ref => { this[`chatMessage:${i}`] = ref }}
          key={i}
          style={{...style.messageWrapper, justifyContent: right ? "flex-end" : "flex-start"}}>
          <div
            style={right ? style.chatRight : style.chatLeft}>
            { body }
          </div>
        </div>
      )
    })
    return (
      <div style={style.client}>
        <div style={style.header}>
          <div style={style.logo}>
            <img
              style={{ height: "40px", paddingRight: "5px" }}
              alt="learnphoenix logo"
              src="https://s3.amazonaws.com/learnphoenix-static-assets/favicons/favicon-96x96.png" />
            <span style={style.title}>PhoenixChat.io</span>
          </div>
          <div
            style={style.close}
            onClick={this.closeChat}>
            Close
          </div>
        </div>
        <div
          ref={ref => this.chatContainer = ref}
          style={style.chatContainer}>
          { list }
        </div>
        <div style={style.inputContainer}>
          <input
            type="text"
            style={style.inputBox} />
          <div>
            100% free by <a href="https://learnphoenix.io">PhoenixChat</a>
          </div>
        </div>
      </div>
    )
  }
}

export class PhoenixChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleChat = this.toggleChat.bind(this)
  }

  toggleChat() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        { this.state.isOpen
          ? <PhoenixChatSidebar toggleChat={this.toggleChat} />
          : <PhoenixChatButton toggleChat={this.toggleChat} /> }
      </div>
    )
  }
}

export default PhoenixChat
