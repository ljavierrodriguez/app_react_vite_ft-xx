import React from 'react';

export function Alert(props){
    return (
        <div className='alert'>
            <span>{props.text}</span>
        </div>
    )
}