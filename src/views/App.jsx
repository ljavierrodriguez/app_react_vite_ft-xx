import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import LinkMenu from '../components/LinkMenu';
import '../styles/global.css';
import '../styles/App.scss';
import { link, links } from '../data/info';

const App = () => {

    const [menu, setMenu] = useState([
        { href: '/#', text: 'Link 1' },
        { href: '/#', text: 'Link 2' },
        { href: '/#', text: 'Link 3' },
        { href: '/#', text: 'Link 4' },
    ])

    return (
        <>
            <h1>Hello World!</h1>
            <h1>Hello World!</h1>
            <Alert text="Hello World" />
            <Alert text="Hola Mundo" />
            <Alert text="Alerta Muno" />

            <LinkMenu href={link.href} text={link.text} />

            {
                menu.map((link, i) => {
                    return (
                        <LinkMenu
                            href={link.href}
                            text={link.text}
                            key={i}
                        />
                    )
                })
            }

            {
                links.map(function({href, text}, index){
                    return (
                        <LinkMenu
                            href={href}
                            text={text}
                            key={index}
                        />
                    )
                })
            }
        </>
    )
}

export default App;