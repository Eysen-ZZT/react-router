import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='title'>
          <Header />
        </div>
        <hr />
        <div className='main'>
          <div className='nav-group'>
            <MyNavLink to='/home'>Home</MyNavLink>
            <MyNavLink to='/about'>About</MyNavLink>
          </div>
          <div className='container'>
            {/* 
              当前使用的路由为 react-router-dom@5 的版本，最新版本这种写法会报错，Route必须作为子标签包含在Routes内

              下面Home组件和Test都使用了 /home 作为路径，如果不加 Switch标签情况下，会将两个组件都渲染出来，通常我们都是
              一个路径匹配一个组件，所以，出于性能考虑，添加 Switch 后，匹配到第一个路径后则不会再往后进行匹配
            */}
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/home' component={Test} />
              {/* 默认打开展示的页面 */}
              <Redirect to='/about' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
