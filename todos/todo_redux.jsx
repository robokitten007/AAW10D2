import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import {receiveTodo} from './frontend/actions/todo_actions';
import {receiveTodos} from './frontend/actions/todo_actions';
import {removeTodo} from './frontend/actions/todo_actions';

function Something(){
    return(    
        <div className='title'>
            <h1>Todos App</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    const root = document.getElementById("root");
    ReactDOM.render(<Something />, root);
})