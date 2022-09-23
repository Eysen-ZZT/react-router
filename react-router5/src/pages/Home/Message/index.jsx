import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    MessageInfo: [
      { id: '01', title: 'message1' },
      { id: '02', title: 'message2' },
      { id: '03', title: 'message3' }
    ]
  }
  // push(path, state) 和 replace(path, state) 都接收两个参数 path 和 state
  // 所以在使用 state 传递参数的时候可以在第二个参数传递要携带的参数
  pushOpen = (id) => {
    // 通过params传递参数
    this.props.history.push(`/home/message/detail/${id}`)
  }
  replaceOpen = (id) => {
    this.props.history.replace(`/home/message/detail/${id}`)
  }
  // history 对象中还有 go(n)前进/后退  goBack()后退  goForward()前进  等方法实现路由切换
  render() {
    const { MessageInfo } = this.state;
    return (
      <div className='message'>
        <ul>
          {
            MessageInfo.map(message => {
              return (
                <li key={message.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail?id=${message.id}`}>{message.title}</Link> */}
                  {/* 向路由组件传递state参数，此方法不会在url上显示 */}
                  {/* <Link to={{ pathname: '/home/message/detail', state: { id: message.id } }}>{message.title}</Link> */}

                  {/* 编程式路由 */}
                  <button onClick={() => this.pushOpen(message.id)}>push方式</button>
                  <button onClick={() => this.replaceOpen(message.id)}>replace方式</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <div>
          <Switch>
            {/* 
              注意事项：前两种方式路径仅使用 /home/message 也不会报错，但第三种会报错，并且不携带 /detail 
              本就是不正确的写法，不要被不报错迷惑了。
            */}

            {/* 声明接收params参数 */}
            <Route path='/home/message/detail/:id' component={Detail} />
            {/* 声明接收search参数 */}
            {/* <Route path='/home/message/detail' component={Detail} /> */}
            {/* 声明接收state参数 */}
            {/* <Route path='/home/message/detail' component={Detail} /> */}
          </Switch>
        </div>
      </div >
    )
  }
}
