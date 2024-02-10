import "bootstrap/dist/css/bootstrap.min.css"
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { LoginParent } from "./Pages/Login/Login";
import Navbar from "./Pages/Navbar/Navbar";


function App() {
  return (
    <div className="App container bg-white bg-gradient min-vw-100 min-vh-100">
        {/* <Navbar/> */}
        <Dashboard />
        {/* <LoginParent/> */}
    </div>

  );
}

export default App;
