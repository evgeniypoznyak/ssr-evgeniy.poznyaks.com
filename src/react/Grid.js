import React, {Component, useContext} from 'react';
import {State} from './shared/StateManager';

class Grid extends Component {
    constructor(props) {
        super(props);
        let repos;
        // eslint-disable-next-line no-undef
        if (__isBrowser__) {
            repos = window.__INITIAL_DATA__;
            // console.log("1: ",repos);
            // delete window.__INITIAL_DATA__;
        }
        if (!__isBrowser__ && this.props.staticContext) {
            repos = this.props.staticContext.data;
            // console.log("2: ",repos);
        }
        if (!__isBrowser__ && !this.props.staticContext) {
            const context = useContext(State);
            repos = context.data;
            // console.log("3: ", repos);
        }
        // console.log(repos);

        this.state = {
            repos: repos,
            loading: !repos,
        };

        this.fetchRepos = this.fetchRepos.bind(this);
    }

    componentDidMount() {
        if (!this.state.repos) {
            this.fetchRepos(this.props.match.params.id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchRepos(this.props.match.params.id);
        }
    }

    fetchRepos(lang) {
        this.setState(() => ({
            loading: true,
        }));

        this.props.fetchInitialData(lang)
            .then((repos) => this.setState(() => ({
                repos,
                loading: false,
            })));
    }

    render() {
        const {loading, repos} = this.state;
        if (loading === true) {
            return <p>LOADING...</p>;
        }
        // console.log(repos);

        return (
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            </ul>
        );
    }
}

export default Grid;
