import multer from 'multer';

const resumeName = 'Evgeniy_Poznyak_Resume.pdf';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/docs');
    },
    filename: function(req, file, cb) {
        cb(null, resumeName);
    },
});
export const upload = multer({storage: storage}).single('file');
