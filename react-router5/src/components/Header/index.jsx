import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Header extends Component {
  back = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <h1>React Router Demo</h1>
        <div>
          <button onClick={this.back}>后退</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);

// withRouter() 函数返回的是经过加工后携带路由属性的组件