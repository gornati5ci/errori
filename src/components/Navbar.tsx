import { useState } from "react";
import NavLink from "./Navlink";

export interface NavbarProps {
	attivo:string;
	setAttivo:(attivo:string)=>any
}

const Navbar: React.FunctionComponent<NavbarProps> = ({attivo,setAttivo}) => {
	const [collassato,setCollassato]=useState(true);
	function premutoToggle() {
		setCollassato(!collassato);
	}
	function premutoLink(e:any) {
		setAttivo(e.target.innerText);
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button className="navbar-brand invisibile">Mistakes</button>
			<button
				className="navbar-toggler"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				onClick={premutoToggle}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className={(collassato?"collapse":"")+" navbar-collapse"} id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<NavLink attivo={attivo} testo="Errori" premuto={premutoLink}></NavLink>
					<NavLink attivo={attivo} testo="Aggiungi errore" premuto={premutoLink}></NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
