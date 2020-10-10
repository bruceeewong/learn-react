import React from 'react';

const JSXBaseDemo = () => {
  const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>';
  // 必须这种格式
  const rawHtmlData = {
    __html: rawHtml,
  };
  return (
    <>
      <p dangerouslySetInnerHTML={rawHtmlData}></p>
      {/* <p dangerouslySetInnerHTML={rawHtml}></p> */}
      <p>{rawHtml}</p>
    </>
  );
};

export default JSXBaseDemo;
