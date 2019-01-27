import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import App from "./App";
import { default as store } from "./store";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// 不允许在动作外部修改状态
configure({ enforceActions: "always" });

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
