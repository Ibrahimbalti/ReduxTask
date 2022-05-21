import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import FormatShapesIcon from "@material-ui/icons/FormatShapes";
const Sidebar = () => {
  //   const classes = useStyles();
  return (
    <div className='sidebar'>
      <div className='sidebarwrapper'>
        <ul className='sidebarlist'>
          <NavLink to='/' style={{ textDecoration: "none", color: "white" }}>
            <li className='sidebarlistitem'>
              <FormatShapesIcon className='sidebaricon' />
              <span className='sidebarlistitme'>Form</span>
            </li>
          </NavLink>

          <NavLink
            to='/record'
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className='sidebarlistitem'>
              <ReorderIcon className='sidebaricon' />
              <span className='sidebarlistitme'>Record</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
