import React from "react";
import "./sidebar.css";
import { RssFeed, Chat } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  //   const classes = useStyles();
  return (
    <div className='sidebar'>
      <div className='sidebarwrapper'>
        <ul className='sidebarlist'>
          <NavLink to='/' style={{ textDecoration: "none", color: "white" }}>
            <li className='sidebarlistitem'>
              <RssFeed className='sidebaricon' />
              <span className='sidebarlistitme'>Form</span>
            </li>
          </NavLink>

          <NavLink
            to='/record'
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className='sidebarlistitem'>
              <Chat className='sidebaricon' />
              <span className='sidebarlistitme'>Record</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
