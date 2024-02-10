import "bootstrap/dist/css/bootstrap.min.css"
import { Dashboard } from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App container text-center bg-white bg-gradient min-vw-100 min-vh-100">
        {/* <Navbar /> */}
        <Dashboard />
        {/* <LoginParent /> */}
    </div>

  );
}

export default App;
