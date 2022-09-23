import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'
import { computedClassName } from './utils/index'
import './App.css'


export default function App() {
  // 使用useRoutes生成路由
  const element = useRoutes(routes);

  return (
    <div>
      <div className='title'>
        <Header />
      </div>
      <hr />
      <div className='main'>
        <div className='nav-group'>
          {/* 
            NavLink 在选中时会默认添加一个active的类名，类名样式在App.css里有书写
            其他类名无效，如果想要自定义类名，需要使用函数
          */}
          <NavLink className={computedClassName} to='/home'>Home</NavLink>
          <NavLink className={computedClassName} to='/about'>About</NavLink>
        </div>
        <div className='container'>
          {/*
            <Routes>
              <Route path='/home' component={Test} /> 
              // 上面是router5的写法，以下是router6的写法
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/' element={<Navigate to='/home' />} />
            </Routes> 
          */}
          {element}
        </div>
      </div>
    </div>
  )
}
