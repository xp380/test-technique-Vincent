import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "antd/dist/antd.css";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import MainPage from "./Container/MainPage";
import MovieReducer from "./redux/reducer";

const store = createStore(
  MovieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
