import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import resume from './routes/resume';
import biography from './routes/biography';

export default app => {
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.static('public'));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    app.use('/resume', resume);
    app.use('/biography', biography);
};
