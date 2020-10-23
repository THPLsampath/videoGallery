const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'message recieved from post on /api/signup'
    })
});

module.exports = router;