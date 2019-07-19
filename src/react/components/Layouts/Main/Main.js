import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import CenterPane from '../Panes/CenterPane';

const styles = {
    Paper: {
        // height: "100%",
        marginTop: 5,
        marginBottom: 10,
    },
    CenterPane: {
        height: '100%',
        padding: 20,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
};

const Main = (props) => {



    return (
        <Grid container justify={'space-between'}>
            {/*<SkillPane styles={styles} skills={repos.sortedData.left}/>*/}
            <CenterPane styles={styles}>{props.children}</CenterPane>
            {/*<SkillPane styles={styles} skills={repos.sortedData.right}/>*/}
        </Grid>
    );
};

export default Main;
