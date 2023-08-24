import React from "react";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import Block3 from "./Block3.js";
import Block2 from "./Block2.js";
import Block1 from "./Block1.js";


function Home(){
    return(
      <>
      <Navbar/>
      <Sidebar/>
      <Block3/>
      <Block2/>
      <Block1/>
     </>
    );
}
export default Home;