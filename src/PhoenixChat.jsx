import React from 'react'
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
    this.state = {
      messages: [
        {from: "Client", body: "Test"},
        {from: "John", body: "Foo"},
        {from: "Client", body: "Bar"}
      ]
    }
  }

  closeChat() {
    this.props.toggleChat()
  }

  render() {
    const list = !this.state.messages ? null : this.state.messages.map((bubble, i) => {
      const right = bubble.from === "Client"
      return (
        <div style={{...style.messageWrapper, justifyContent: right ? "flex-end" : "flex-start"}}>
          <div
            key={i}
            style={ right ? style.chatRight : style.chatLeft }>
            { bubble.body }
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
            <span>PhoenixChat.io</span>
          </div>
          <div
            style={style.close}
            onClick={this.closeChat}>
            Close
          </div>
        </div>
        <div style={style.chatContainer}>
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
