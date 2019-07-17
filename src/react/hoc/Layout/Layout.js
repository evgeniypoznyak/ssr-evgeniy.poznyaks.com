import React, {Fragment} from 'react';
// import Navbar from '../../Navbar';
import Header from '../../components/Header/Header';

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            {props.children}
        </Fragment>
    );
};
export default Layout;
