import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 *
 * @return {*}
 * @constructor
 */
export default function Navbar() {
    const languages = [{
        name: 'All',
        param: 'all',
    }, {
        name: 'JavaScript',
        param: 'javascript',
    }, {
        name: 'PHP',
        param: 'php',
    }, {
        name: 'Ruby',
        param: 'ruby',
    }, {
        name: 'Python',
        param: 'python',
    }, {
        name: 'Java',
        param: 'java',
    },
    ];

    return (
        <ul>
            {languages.map(({name, param}) => (
                <li key={param}>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
