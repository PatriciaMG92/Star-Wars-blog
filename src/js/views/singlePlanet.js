import React, { useContext, useEffect } from "react";
import {useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const SinglePlanet = () => {
	const params = useParams();
	const {id} = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

	useEffect(()=>{
		if(store.planets == 0)return;
		const actualInfo = store.planets.find((item)=>item.result.uid == id);
		console.log(actualInfo);
		setActualPage(actualInfo);
	}, [params])

	return (
		<>
			<div className="row m-5">
				<div className="col-6 text-center">
					<img id="singleImg" src={`https://starwars-visualguide.com/assets/img/planets/${actualPage?.result.uid}.jpg`} alt="..." />
					
				</div>
				<div className="col-6 text-start">
					<h1 className="p-4 mb-3">{actualPage?.result.properties.name}</h1>
					<p className="p-2">{actualPage?.result.description}</p>
				</div>
			</div>
			<div className="row text-danger p-5 border-top border-danger m-5">
                <div className="col">
					<p>Climate:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.climate}</p>
				</div>
				<div className="col">
					<p>Population:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.population}</p>
				</div>
			    <div className="col">
					<p>Diameter:</p>
	    			<p className="text-dark ps-1">{actualPage?.result.properties.diameter}</p>
				</div>
				<div className="col">
                    <p>Terrain:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.terrain}</p>
				</div>
			    <div className="col">
					<p>Surface water:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.surface_water}</p>
				</div>
				<div className="col">
					<p>Orbital period:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.orbital_period}</p>
				</div>
			</div>
		</>

	);
};
