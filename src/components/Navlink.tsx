import {NavLinkProps} from "../interfaces";

const NavLink: React.FunctionComponent<NavLinkProps> = ({attivo, testo, premuto}) => {
	return (
		<li className="nav-item">
			<button className={`nav-link invisibile ${attivo === testo ? "active" : ""}`} onClick={premuto}>
				{testo}
			</button>
		</li>
	);
};

export default NavLink;
