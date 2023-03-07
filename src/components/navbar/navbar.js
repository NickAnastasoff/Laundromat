import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;