import React, { useState } from 'react';

function InputNode ( { idInputCheckBox, labelValue } ) {

    return (
        <>
            <input 
                className = 'Color'
                type = 'color'
                id = { idInputCheckBox }
                onChange = { (e) => e.target.value }
                value = 'Hi, How are you?'
                />
            
        </>
    )
}

export default InputNode;