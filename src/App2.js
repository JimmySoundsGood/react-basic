import { useState } from "react";

// React中事件绑定
function App2() {
  // const handleClick = (e) => {
  //   console.log("btn被点击", e);
  // };
  let [count, setCount] = useState(0);

  let [form, setForm] = useState({ name: "jack" });

  const handleClick = (name, e) => {
    console.log(name, e);
    setCount(count + 1);
  };

  const changeForm = () => {
    setForm({ ...form, name: form.name + "a" });
  };

  return (
    <div>
      <button onClick={(e) => handleClick("name", e)}>
        Click me! {count} {form.name}
      </button>
      <button onClick={changeForm}>{form.name}</button>
    </div>
  );
}

export default App2;
