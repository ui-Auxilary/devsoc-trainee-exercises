import { useAuthContext } from "context/AuthContext";
import Login from "pages/Login";
import Shop from "pages/Shop";

import './App.css';

function App() {
  const {loggedIn} = useAuthContext();
  return (
    <div className="appContainer">
      {loggedIn ? <Shop /> : <Login />}
    </div>
  )
}

export default App;
