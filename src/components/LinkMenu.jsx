import React from 'react';

const LinkMenu = props => {
    return (
        <a href={props.href}>{props.text}</a>
    )
}

export default LinkMenu;