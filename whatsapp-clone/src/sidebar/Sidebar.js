import React, { useEffect, useState } from "react";
import "./sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import SidebarChat from "../SideBarChat/SidebarChat";
// import "firebase";
import db from "../firebase";
import { useStateValue } from "../stateProvider/stateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  // const [{ user }, dispatch] = useStateValue;
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="Sidebar_header">
        <AccountCircleIcon />
        <div className="sidebar_headerright">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar_chat">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat Key={room.id} id={room.id} name={room.data.name} />
        ))}

        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
