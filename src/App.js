// 项目的根组件
// App -> index.js -> public/index.html(root)
const count = 100;

const getName = () => "jimmy";
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];
const isLogin = true

function App() {
  return (
    <div className="App">

      {/* 逻辑与 && */}
      { isLogin && <div>this is a span</div>}

      { isLogin ? <div>Welcome to Jimmy</div> : <div>Login</div>}

      this is an App
      {/* 使用引号传递字符串 */}
      {"This is a message"}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: "red" }}>this is a div</div>
      {/* 渲染列表 */}
      {/* 注意事项：加上一个独一无二的key 字符串或者number id */}
      {/* key的作用： 提升性能 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
