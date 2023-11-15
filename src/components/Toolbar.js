import '../css/Toolbar.css';

import React from 'react';

   function Toolbar ({filters, selected, onSelectFilter}) {
    return (
        <div class = "Toolbar">
            {
                filters.map((item) => (
                    <button 
                    onClick={onSelectFilter}
                    class = {item === selected ? 'active' : ''}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    )
}


export default Toolbar;