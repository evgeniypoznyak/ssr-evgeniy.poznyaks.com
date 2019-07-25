import React, {Component, useContext} from 'react';
import {State} from './shared/StateManager';

class Grid extends Component {
    constructor(props) {
        super(props);
        let skills;
        // eslint-disable-next-line no-undef
        if (__isBrowser__) {
            skills = window.__INITIAL_DATA__;
        }
        if (!__isBrowser__ && this.props.staticContext) {
            skills = this.props.staticContext.data;
        }
        if (!__isBrowser__ && !this.props.staticContext) {
            const context = useContext(State);
            skills = context.data;
        }

        this.state = {
            skills: skills,
            loading: !skills,
        };

        this.fetchRepos = this.fetchRepos.bind(this);
    }

    componentDidMount() {
        if (!this.state.skills
        ) {
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
            .then(skills => this.setState(() => ({
                skills,
                loading: false,
            })));
    }

    render() {
        const {
            loading, skills,
        } = this.state;
        if (loading === true) {
            return <p>LOADING...</p>;
        }
        return (
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {skills.rawData.map(({name, owner, stargazers_count, html_url, score}) => (
                    <li key={name} style={{margin: 30}}>
                        <ul>
                            <li><a href={html_url}>{name}</a></li>
                            {/* <li>@{owner.login}</li>*/}
                            {/* <li>{stargazers_count} stars</li>*/}
                            {/* <li>{score} score</li>*/}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Grid;
