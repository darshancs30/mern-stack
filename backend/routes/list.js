const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { uploadList, getAgentLists } = require('../controllers/listController');

router.post('/upload', upload.single('file'), uploadList);
router.get('/agent/:agentId', getAgentLists);

module.exports = router;
