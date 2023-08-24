import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
  } from 'cdbreact';
import "./Sidebar.css";
import Sandclock from "../images/Sandclock.png";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="side">
            <CDBSidebar>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large"><Link to="/dashboard">DashBoard</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Surf e-books</CDBSidebarMenuItem>
            <CDBSidebarMenuItem><img src={Sandclock} width="20" height="20" style={{marginRight:'15px'}}/>  Take Quiz</CDBSidebarMenuItem> 
            </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
        </div>
    
    );
}
export default Sidebar;