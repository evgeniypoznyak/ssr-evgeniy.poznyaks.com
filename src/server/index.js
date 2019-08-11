import express from 'express';
import cors from 'cors';
import serialize from 'serialize-javascript';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import {ServerStyleSheets} from '@material-ui/styles';
import routes from '../react/routes';
import {ReactMaterialUI} from '../react';
import {State} from '../react/shared/StateManager';
import {getSkillsByPanes} from '../react/shared/api';
import {getSkillsFromApiGateway} from './helper';

const promiseSkillsFromApiGateway = getSkillsFromApiGateway();

const app = express();
app.use(cors());
app.use(express.static('public'));

function renderStartUpPage({html, css, data} = {}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Evgeniy Poznyak - Software Engineer</title>
        <style id="jss-server-side">${css}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        <script async src="/bundle.js" async></script>
      </body>
    </html>
  `;
}

app.get('*', async (req, res, next) => {
    const skills = await promiseSkillsFromApiGateway;

    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve();

    promise.then(data => {
        const sheets = new ServerStyleSheets();
        // if (!data.data) {
        //     console.log('NOT!!!');
        //     data = {rawData: skills, sortedData: getSkillsByPanes(skills)};
        // }
        // const sortedData = getSkillsByPanes(data.data);

        data = {rawData: skills, sortedData: getSkillsByPanes(skills)};
        const context = {data};
        const html = ReactDOMServer.renderToString(
            sheets.collect(
                // context will be available only where is routes will be rendered by <Switch>
                <State.Provider value={{data}}>
                    <StaticRouter location={req.url} context={context}>
                        <ReactMaterialUI/>
                    </StaticRouter>
                </State.Provider>,
            ),
        );
        const css = sheets.toString();
        res.send(renderStartUpPage({html, css, data}));
    }).catch(next);
});

app.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});
