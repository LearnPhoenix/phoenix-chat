import React from 'react'
import style from './style.js'

export class PhoenixChat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={style.chatButton}>
        <img
          src="https://github.com/LearnPhoenix/graphics/blob/master/phoenix-chat-icon.png?raw=true"
          style={style.chatImage} />
      </div>
    )
  }
}

export default PhoenixChat
