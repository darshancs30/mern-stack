const express = require('express');
const router = express.Router();
const { addAgent, getAgents } = require('../controllers/agentController');
const auth = require('../middleware/auth');

router.post('/', auth, addAgent);
router.get('/', auth, getAgents);

module.exports = router;
