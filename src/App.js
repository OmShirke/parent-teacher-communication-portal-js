import { ChatPage } from "./Pages/Chat/Chat";
import { Home } from "./Pages/Home/Home";
import { LoginParent } from "./Pages/Login/Login";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App container text-center bg-white bg-gradient min-vw-100 min-vh-100">
        <Navbar />
        {/* <ChatPage /> */}
        <Home />
    </div>
  );
}

export default App;
