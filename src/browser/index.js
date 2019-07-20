import React, {useEffect} from 'react';
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
    let data;
    // eslint-disable-next-line no-undef
    if (__isBrowser__) {
        data = window.__INITIAL_DATA__;
        // delete window.__INITIAL_DATA__;
    }
    // console.log(data);
    return (
        <State.Provider value={{data}}>
            <BrowserRouter>
                <ReactMaterialUI/>
            </BrowserRouter>
        </State.Provider>
    );
}

hydrate(<ReactBrowserApp/>, document.querySelector('#root'));
