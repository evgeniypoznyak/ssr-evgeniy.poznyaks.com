import React, {useEffect, useState} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ReactMaterialUI from '../react';
import {State} from '../react/shared/StateManager';


function ReactBrowserApp() {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    let idata;
    // eslint-disable-next-line no-undef
    if (__isBrowser__) {
        idata = window.__INITIAL_DATA__;
        // delete window.__INITIAL_DATA__;
    }
    const [data, setData] = useState(idata);
    return (
        <State.Provider value={{data, setData}}>
            <BrowserRouter>
                <ReactMaterialUI/>
            </BrowserRouter>
        </State.Provider>
    );
}

hydrate(<ReactBrowserApp/>, document.querySelector('#root'));
