import "bootstrap/dist/css/bootstrap.min.css"
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginParent, LoginTeacher } from "./Pages/Login/Login";
import {Home} from "./Pages/Home/Home"
import Navbar from "./Pages/Navbar/Navbar"

function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        <Route path="/login" element={< LoginParent/>}/>
        <Route path="/home" element={< Home/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>

  );
}

export default App;

    //  <div className="App container text-center bg-white bg-gradient min-vw-100 min-vh-100">
    //     {/* <Navbar /> */}
    //     {/* <Dashboard /> */}
    //     {/* < Home /> */}
    //     {/* <LoginParent /> */}
    // </div>