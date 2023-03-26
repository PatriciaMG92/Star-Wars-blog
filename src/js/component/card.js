import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Card = ({item, type, url}) =>{
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
    return(
        <>
            <div className="card" style={{width: 18+'rem'}} id>
				<img src={`https://starwars-visualguide.com/assets/img/${type}/${item.result.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item.result.properties.name}</h5>
					{type == "characters" ? (
            			<>
              				<p>Gender: {item.result.properties.gender}</p>
              				<p>Hair color: {item.result.properties.hair_color}</p>
              				<p>Eyes color: {item.result.properties.eye_color}</p>
            			</>
          			) : (
            			<>
              				<p>Population: {item.result.properties.population}</p>
              				<p>Terrain: {item.result.properties.terrain}</p>
            			</>
          			)}
					<div className="d-flex justify-content-between">
					{type == "characters" ? (
            			<>
              				<a href="#" className="btn btn-outline-primary" onClick={() => navigate(`details/${item.result.uid}`)}>Learn more!</a>
            			</>
          			) : (
            			<>
							<a href="#" className="btn btn-outline-primary" onClick={() => navigate(`planet_details/${item.result.uid}`)}>Learn more!</a>
            			</>
          			)}
						
						<button type="button" className="btn btn-outline-warning" onClick={()=>{actions.setFavorites(item.result.properties.name)}}><span className="material-symbols-outlined">
							favorite
						</span></button>
					</div>
				</div>
			</div>
        </>
    )
}

export default Card;