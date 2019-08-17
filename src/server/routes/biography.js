import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();
import fs from 'fs';

router.get('/', async (req, res, next) => {
    try {
        const data = fs.readFileSync('./public/docs/biography.json');
        res.contentType('application/json');
        res.send(data);
    } catch (e) {
        res.sendStatus(500).send(e.message);
    }
});

router.post('/', async (req, res, next) => {
    res.send(req.body);
    fs.writeFile('./public/docs/biography.json', JSON.stringify(req.body), err => {
        if (err) console.log(err);
        console.log('Successfully Written to File.');
    });
});

export default router;
