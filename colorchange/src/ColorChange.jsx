

import React, { useEffect, useState } from 'react';

function ColorChange() {
    const [color, setColor] = useState("#ffffff");
   
    const handleChange = (event) => {
        setColor(event.target.value);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div>
            <input className='in' type="color" onChange={handleChange} />
            
            <button className='bt' onClick={() => setColor("#ffffff")}>Reset Color</button>
        </div>
    );
}

export default ColorChange;
