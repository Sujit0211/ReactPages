import React from "react";
import note from "../images/note.png";
import bell4 from "../images/bell4.png";
import profile5 from "../images/profile5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar(){
    return(
        <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
           <a class="navbar-brand" >
            <button>
            <FontAwesomeIcon icon={faBook} size="2x" />
            </button>
           </a>
           <p class="navbar-item">
                e-Library
           </p>
           <p class="navbar1-item">
                powered by
                <img src="https://capgemini.tekstac.com/pluginfile.php/1/theme_material_boost/logo/1692626600/logo.svg" width="90" height="90"/>
           </p>
           <a class="navbar2-brand">
           <img src={bell4} width="50" height="50" alt="Transparent Image" />
           <span class="badge badge-dark">5</span>
           </a>
           <a class="navbar3-brand">
           <img src={profile5} width="50" height="50" alt="Transparent Image" />
           </a>
  </div>
</nav>
);
}
export default Navbar;