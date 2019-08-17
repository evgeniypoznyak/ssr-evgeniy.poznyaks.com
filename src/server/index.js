import express from 'express';
import serialize from 'serialize-javascript';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import {ServerStyleSheets} from '@material-ui/styles';
import reactRoutes from '../react/reactRoutes';
import {ReactMaterialUI} from '../react';
import {State} from '../react/shared/StateManager';
import {getSkillsByPanes} from '../react/shared/api';
import {skills} from '../react/shared/initialData/skills';
import biography from '../../public/docs/biography';

import routes from './routes';

const app = express();
routes(app);

process.on('unhandledRejection', ex => {
    console.log('unhandledRejection: ', ex);
    throw ex;
});
process.on('uncaughtException', err => {
    console.log('uncaughtException: ', err);
});

function renderStartUpPage({html, css, data} = {}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Evgeniy Poznyak - Software Engineer</title>
        <style id="jss-server-side">${css}</style>
        <style> .Pane {} @media (max-width: 960px) { .Pane { display: none; background-color: #0074D9; } } </style>
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
    const activeRoute = reactRoutes.find(route => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve();

    promise.then(data => {
        const sheets = new ServerStyleSheets();
        if (data && data.skills) {
            data = {
                rawData: data.skills,
                sortedData: getSkillsByPanes(data.skills),
                authorized: false,
                biography: biography.biography,
            };
        } else {
            data = {
                rawData: skills,
                sortedData: getSkillsByPanes(skills),
                authorized: false,
                biography: biography.biography,
            };
        }
        const context = {data};
        const html = ReactDOMServer.renderToString(
            sheets.collect(
                // context will be available only where is reactRoutes will be rendered by <Switch>
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


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
