import React, { useContext, useEffect } from "react";
import {useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const SingleCharacter = () => {
	const params = useParams();
	const {id} = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

	useEffect(()=>{
		if(store.characters == 0) return;
		const actualInfo = store.characters.find((item)=>item.result.uid == id);
		console.log(actualInfo);
		setActualPage(actualInfo);
	}, [params])

	return (
		<>
			<div className="row m-5">
				<div className="col-6 text-center">
					<img id="singleImg" src={`https://starwars-visualguide.com/assets/img/characters/${actualPage?.result.uid}.jpg`} alt="..." />
					
				</div>
				<div className="col-6 text-start">
					<h1 className="p-4 mb-3">{actualPage?.result.properties.name}</h1>
					<p className="p-2">{actualPage?.result.description}</p>
				</div>
			</div>
			{/* <span>{store[type]}</span> */}
			<div className="row text-danger p-5 border-top border-danger m-5">
				<div className="col">
					<p>Gender:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.gender}</p>
				</div>
				<div className="col">
					<p>Height:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.height}</p>
				</div>
				<div className="col">
					<p>Hair color:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.hair_color}</p>
				</div>
				<div className="col">
					<p>Eye color:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.eye_color}</p>
				</div>
				<div className="col">
					<p>Birth year:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.birth_year}</p>
				</div>
				<div className="col">
					<p>Gender:</p>
					<p className="text-dark ps-1">{actualPage?.result.properties.gender}</p>
				</div>
			</div>
		</>

	);
};
