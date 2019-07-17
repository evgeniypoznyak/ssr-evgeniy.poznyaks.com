import React, {useEffect} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ReactMaterialUI from '../react';


function ReactBrowserApp() {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <BrowserRouter>
            <ReactMaterialUI/>
        </BrowserRouter>
    );
}

hydrate(<ReactBrowserApp/>, document.querySelector('#root'));
