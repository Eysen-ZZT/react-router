import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { computedClassName } from '../utils/index'

export default function Home() {

  return (
    <div>
      <h2>我是Home组件</h2>
      <div className='second-nav-group'>
        {/* to 属性可以直接写 路径，如果加了 / 就是绝对路径，加了 ./ 就和没加效果一致 */}
        <NavLink className={computedClassName} to='news'>News</NavLink>
        <NavLink className={computedClassName} to='message'>Message</NavLink>
      </div>
      <hr style={{ margin: 0 }} />
      {/* 指定路由器的展示位置 */}
      <Outlet />
    </div>
  )
}
