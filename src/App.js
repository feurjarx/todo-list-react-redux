import React from 'react';
import './App.css';
import TodoPanel from './containers/TodoPanel';
import TodoList from './containers/TodoList';

let App = () => (
    <div className="container">
        <TodoPanel/>
        <hr/>
        <TodoList/>
    </div>
);

export default App;