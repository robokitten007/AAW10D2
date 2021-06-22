import React from 'react';
import ReactDOM from 'react-dom';

function Something(){
    return(    
        <div className='title'>
            <h1>Todos App</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Something />, root);
})