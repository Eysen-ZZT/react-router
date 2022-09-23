import React, { Component } from 'react'
// import qs from 'querystring';

const MessageDetailList = [
  { id: '01', title: 'message1', content: 'Hello, World!' },
  { id: '02', title: 'message2', content: 'Hello, China!' },
  { id: '03', title: 'message3', content: 'Hello, zhgtzhong!' }
]

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接收传递的params参数
    const { id } = this.props.match.params;
    // 接收传递的search参数
    // const { id } = qs.parse(this.props.location.search.slice(1));
    // 接收传递的state参数
    // const { id } = this.props.location.state || {};
    return (
      <div>
        {
          MessageDetailList.filter(message => message.id === id).map(message => {
            return (
              <ul key={message.id}>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>CONTENT: {message.content}</li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}
