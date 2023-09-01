import { Avatar } from "@mui/material";
import React from "react";
import "./sideBarChat.css";

function SidebarChat({ addNewChat }) {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      // hhh
    }
  };
  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
