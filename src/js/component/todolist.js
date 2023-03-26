import React, { useContext } from 'react';
import { AppContext } from '../appContext.js';

export const TodoList = () => {
	const context = useContext(AppContext)
	return <div>
		{context.store.todos.map((task, i) => (<li>{task}</li>))}
		<button onClick={() => context.actions.addTask("I am the task " + context.todos.length)}> + add </button>
	</div>
}