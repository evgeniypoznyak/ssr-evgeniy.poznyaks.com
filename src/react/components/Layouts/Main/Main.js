import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import CenterPane from '../Panes/CenterPane/CenterPane';
import {State} from '../../../shared/StateManager';
import SkillPane from '../Panes/SkillPane/SkillPane';


const styles = {
    Paper: {
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

const Main = props => {
    const context = useContext(State);
    return (
        <Grid container justify={'space-between'}>
            <SkillPane styles={styles} skills={context.data.sortedData.left}/>
            <CenterPane styles={styles}>{props.children}</CenterPane>
            <SkillPane styles={styles} skills={context.data.sortedData.right}/>
        </Grid>
    );
};

export default Main;
