import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import {receiveTodo, receiveTodos, removeTodo} from './frontend/actions/todo_actions';
import {receiveStpes, receiveStep, removeStep, receiveSteps} from './frontend/actions/step_actions';

function Title(){
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
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    const root = document.getElementById("root");
    ReactDOM.render(<Title />, root);
})