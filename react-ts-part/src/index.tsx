import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Hello from "./components/Hello";
import Name from "./components/Name";
import Message from "./components/Message";
//import Parent from "./components/ContainerSample";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import UseMemoSample from "./components/UseMemoSample";
import Clock from "./components/Clock";
import ContextUI from "./components/Context";
import ImageUploader from "./components/ImageUploader";
import Imperative from "./components/Imperative";
import CustomInput from "./components/CustomHook";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <UseMemoSample />
    <Counter initalValue={0} />
    <Clock />
    <ContextUI />
    <ImageUploader />
    <Imperative />
    <CustomInput />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
