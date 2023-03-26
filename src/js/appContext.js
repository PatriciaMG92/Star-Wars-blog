import React from 'react';
import { useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
	const [ store, setStore ] = useState({
		todos: ["Make the bed", "Take out the trash"]
	});
	const [ actions, setActions ] = useState({
		addTask: title => setStore({ ...store, todos: store.todos.concat(title) })
	});
	
	return (
		<AppContext.Provider value={{ store, actions }}>
			{props.children}
		</AppContext.Provider>
	);
}