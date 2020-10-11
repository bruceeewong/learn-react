import React from 'react';

// 纯函数，输入props，输出jsx
function List(props) {
  const { list } = this.props;

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
