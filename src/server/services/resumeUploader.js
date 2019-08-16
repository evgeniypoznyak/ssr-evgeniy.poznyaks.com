import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/docs');
    },
    filename: function(req, file, cb) {
        // cb(null, Date.now() + '-' + file.originalname);
        cb(null, 'Evgeniy_Poznyak_Resume.pdf');
    },
});
export const upload = multer({storage: storage}).single('file');
