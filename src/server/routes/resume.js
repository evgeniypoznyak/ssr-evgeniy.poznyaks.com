import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();
import fs from 'fs';
import multer from 'multer';
import {upload} from '../services/resumeUploader';

router.get('/', async (req, res, next) => {
    const data = fs.readFileSync('./public/docs/Evgeniy_Poznyak_Resume.pdf');
    res.contentType('application/pdf');
    res.send(data);
});

// app.get('/resume', async (req, res, next) => {
//     const data = fs.readFileSync('./public/docs/Evgeniy_Poznyak_Resume.pdf');
//     res.contentType('application/pdf');
//     res.send(data);
// });

router.post('/', async (req, res, next) => {
    upload(req, res, err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).send(req.file);
    });
});

export default router;
