import React, {Fragment} from 'react';
import Header from '../../components/Layouts/Header/Header';
import Main from '../../components/Layouts/Main/Main';
import Footer from '../../components/Layouts/Footer/Footer';


const Layout = props => {
    return (
        <Fragment>
            <Header context={props.context}/>
            <Main context={props.context}>
                {props.children}
            </Main>
            <Footer/>
        </Fragment>
    );
};
export default Layout;
