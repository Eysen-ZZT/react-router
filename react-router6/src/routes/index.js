import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const routes = [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        // 嵌套在路径“/home”下的绝对路径“/news”无效。绝对子路由路径必须从其所有父路由的组合路径开始。所以不需要加 / 
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // path: 'detail/:id/:title/:content', // params方法传参
            path: 'detail', // search,state方法传参
            element: <Detail />
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/',
    // 重定向
    element: <Navigate to='/home' />
  },
];

export default routes;