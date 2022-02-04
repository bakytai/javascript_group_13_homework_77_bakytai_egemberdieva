const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const { nanoid } = require('nanoid');
const db = require('../fileDb');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', (req, res) => {
    const messages = db.getItems();
    return  res.send(messages);
});

router.post('/', upload.single('image'), async (req, res,next) => {
    try {
        if (!req.body.message) {
            return res.status(400).send({message: 'Wrong data'});
        }
        const message = {
            message: req.body.message,
            author: req.body.author,
        };

        if (req.file) {
            message.image = req.file.filename;
        }

        await db.addItem(message);
        return  res.send({message: 'Created new message', id: message.id});
    } catch (e) {
        next(e);
    }
});

module.exports = router;