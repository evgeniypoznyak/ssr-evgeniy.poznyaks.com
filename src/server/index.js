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

function renderStartUpPage({html, css, data} = {}) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Evgeniy Poznyak - Software Engineer</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
<meta property="og:title" content="Evgeniy Poznyak - Software Engineer">
<meta
    property="og:description" 
    content="Engineer Skills, Projects, Portfolio and Resume. Hire an awesome developer">
<meta name="description" content="Engineer Skills, Projects, Portfolio and Resume. Hire an awesome developer">
<meta name="author" content="Evgeniy Poznyak">
<meta property="og:image" content="/assets/evgeniy-poznyak-logo.jpg">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<meta name="Description" 
CONTENT="Author: Evgeniy Poznyak, Category: Software Engineer Portfolio Website, Software Engineer Blog, Blog">
<meta name="robots" content="all">
<meta name="google" content="notranslate"/>
<style id="jss-server-side">${css}</style>
</head>
      <body>
        <div id="root">${html}</div>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        <script async src="/bundle.js" async></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148962831-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-148962831-1');
        </script>        
      </body>
</html>
`;
}

app.get('*', (req, res, next) => {
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
                biography: data.biography,
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
