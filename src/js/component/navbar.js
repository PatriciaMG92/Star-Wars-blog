import React from "react";
import { useContext } from "react";
import { Context} from "../store/appContext";

export const Navbar = () => {
	const {store, actions } = useContext(Context);
	const {favorites} = store;
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
  				<div className="container-fluid justify-content-between">
					<div>
						<a className="navbar-brand ps-4" href="#"><img id="logo" src="https://pixabay.com/static/uploads/photo/2015/12/09/14/09/star-wars-1084773_960_720.png" width="150" height="80"></img></a>
					</div>
    				<div className="pe-5">
						<div className="bg-primary rounded p-1">
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      							<span className="navbar-toggler-icon"></span>
    						</button>
    						<div className="collapse navbar-collapse" id="navbarNavDropdown">
      							<ul className="navbar-nav">
        							<li className="nav-item dropdown">
          								<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            								Favorites <span className="bg-secondary rounded ps-1 pe-1"width="1" height="1">{store.favorites.length}</span>
          								</a>
          								<ul className="dropdown-menu">
            								{store.favorites.length==0 ? <li className="ps-5">(empty)</li> : favorites.map((item)=>{
												return <li>
													<div className="dropdown-item" href="#">{item}<span className="material-symbols-outlined ps-4 text-center" onClick={()=>{actions.deleteFavorites(item)}}>
														delete
													</span>	</div>
												</li>
											})}
          								</ul>
        							</li>
      							</ul>
    						</div>
						</div>
					</div>
    				
  				</div>
			</nav>
		</>
	);
};
