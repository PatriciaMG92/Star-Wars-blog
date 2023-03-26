import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";
import Spinner from "../component/spinner";

const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
	console.log(store.planets);

	return(
		<>
			<div className="container-fluid">
				<div className="row mx-5 mt-2">
					<h1 className="text-warning mt-4 ms-3">Characters</h1>
					<div className="row scroll scrollbar">
					{store.characters == 0 ? <Spinner /> :
					store.characters.map((people) => (
            			<Card key={people.result._id} item={people} type={"characters"}/>
            		))}
					</div>
				</div>
				<div className="row mx-5 mt-2 mb-5">
					<h1 className="text-warning mt-4 ms-3">Planets</h1>
					<div className="row scroll scrollbar">
					{store.planets == 0 ? <Spinner /> : 
					store.planets.map((planet) => (
            			<Card key={planet.result._id} item={planet} type={"planets"}/>
            		))}
					</div>
				</div>
			</div>
		</>
	)
	
};

export default Home;