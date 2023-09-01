import "./App.css";
import Chat from "./chat/Chat";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    // Bem naming convention
    <div className="app">
      <h1>hello </h1>
      <div className="app_body">
        <Sidebar />
        <Chat />
        {/* chat */}
      </div>
    </div>
  );
}

export default App;
