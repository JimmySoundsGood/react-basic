// 定义文章类型
const articleType = 3; // 0 1 3

// 定义核心函数

function getArticleType() {
  if (articleType === 0) {
    return <div>我是无图文章</div>;
  } else if (articleType === 1) {
    return <div>我是单图模式</div>;
  } else {
    return <div>我是三图模式</div>;
  }
}

function App1() {
  return <div className="App1">{getArticleType()}</div>;
}

export default App1;
