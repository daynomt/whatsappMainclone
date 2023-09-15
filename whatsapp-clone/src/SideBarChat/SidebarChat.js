import { Avatar } from "@mui/material";
import React from "react";
import db from "../firebase";
import "./sideBarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      // hhh
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Last message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
