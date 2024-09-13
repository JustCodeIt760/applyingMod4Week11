const express = require('express');
const router = express.Router();
const { User } = require('../db/models');



// Example API endpoint
router.get('/username', async (req, res) => {
    const user = await User.findOne({ where: { id: 1 } });
    res.json({ username: user.username });
});

// Add more  API endpoints as needed
// router.post('/some-endpoint', (req, res) => { ... });

module.exports = router;
