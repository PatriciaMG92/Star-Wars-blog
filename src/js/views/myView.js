import React from 'react';
import { TodoList } from '../component/todolist';


import { ContextWrapper } from '../appContext.js';

const MyView = () => (
	<ContextWrapper>
		<TodoList />
	</ContextWrapper>
);

export default MyView;
