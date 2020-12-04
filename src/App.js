import "./App.css";
import { LoginContainer } from "./container/LoginContext";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./history";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <LoginContainer.Provider>
          <Router history={history}>
            <Routes />
          </Router>
        </LoginContainer.Provider>
      </div>
    </div>
  );
}

export default App;
