import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import { Router } from "express";
import "./App.css";
import Chat from "./chat/Chat";
import Login from "./login/Login";
import Sidebar from "./sidebar/Sidebar";
import { useStateValue } from "./stateProvider/stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue(null);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Routes>
            {/* <Route path="/app" element={<Chat />} /> */}
            <Route
              path="/rooms/:roomId"
              element={
                <>
                  <Sidebar />
                  <Chat />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Sidebar />
                </>
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
