import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName='myactive' className='nav-group-item' {...this.props} />
    )
  }
}
