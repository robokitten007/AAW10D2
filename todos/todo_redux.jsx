import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';

function Something(){
    return(    
        <div className='title'>
            <h1>Todos App</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Something />, root);
})