import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 style={{ marginBottom: 10 }}>我是Home组件</h2>
        <div className=''>
          <div className='second-nav-group'>
            <MyNavLink to='/home/news'>News</MyNavLink>
            <MyNavLink to='/home/message'>Message</MyNavLink>
          </div>
          <hr style={{ margin: 0 }}></hr>
          <div className=''>
            <Switch>
              <Route path='/home/news' component={News} />
              <Route path='/home/message' component={Message} />
              <Redirect to='/home/news' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
