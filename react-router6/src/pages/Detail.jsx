import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Detail() {

  // const { id, title, content } = useParams();

  // const [search, setSearch] = useSearchParams();
  // const id = search.get('id'); // 只能一个一个获取就很烦
  // const title = search.get('title');
  // const content = search.get('content');

  const { state: { id, title, content } } = useLocation();

  return (
    <div>
      {/* <button onClick={() => { setSearch({ id: '005', title: '消息5', content: '魁拔' }) }}>更新search</button> */}
      <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  )
}
