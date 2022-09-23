import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  // 编程式导航，也可以用来前进后退，navigate(1), navigate(-1)
  const navigate = useNavigate();

  const messageList = [
    { id: '001', title: '消息1', content: '狐妖小红娘' },
    { id: '002', title: '消息2', content: '灵笼' },
    { id: '003', title: '消息3', content: '黑白无双' },
    { id: '004', title: '消息4', content: '镇魂街' },
  ]

  const showDetail = (message) => {
    navigate('detail', {
      // 跳转方式，默认false
      replace: false,
      // 只能是state属性
      state: {
        id: message.id,
        title: message.title,
        content: message.content
      }
    })
  }
  return (
    <div>
      <ul>
        {
          messageList.map(message => (
            <li key={message.id}>
              {/* <Link
                style={{ color: 'blue', textDecoration: 'underline' }}
                to={`detail/${message.id}/${message.title}/${message.content}`}
              >
                {message.title}
              </Link> */}
              {/* <Link
                style={{ color: 'blue', textDecoration: 'underline' }}
                to={`detail?id=${message.id}&title=${message.title}&content=${message.content}`}
              >
                {message.title}
              </Link> */}
              <Link
                style={{ color: 'blue', textDecoration: 'underline' }}
                to='detail'
                state={{
                  id: message.id,
                  title: message.title,
                  content: message.content,
                }}
              >
                {message.title}
              </Link>
              &nbsp;&nbsp;
              <button onClick={() => showDetail(message)}>查看详情</button>
            </li>
          ))
        }
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
