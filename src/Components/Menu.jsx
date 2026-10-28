import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from "../data/Navbar.json";

import OffcanvasMenu from 'react-offcanvas-menu-component';

function Menu({location}) {
   
	return(
		<OffcanvasMenu
			Link={Link}
			config={{
				push: true,
			}}
			menu={Navbar.menu}
            header={
				<img src={"/images/"+Navbar.logo} className="App-logo menu-logo w-50" alt="logo"  />
			}
		/>
	)
}


export default Menu;