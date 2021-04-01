import "antd/dist/antd.css";

import { FC } from "react";
import { Home } from "./components/Home/Home";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App: FC = () => {
  return (
    <Router history={history}>
      <Home />
    </Router>
  );
};

export default App;
