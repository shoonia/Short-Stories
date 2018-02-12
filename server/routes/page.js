const express = require('express');

const db = require('../db');

const router = express.Router();
const LIMIT = 8;

router.post('/init', async (req, res) => {
    try {
        const [data] = await db('posts').count('id AS count');
        const totalPages = Math.ceil( (data.count || 1) / LIMIT );
        res.status(200).json({ totalPages });
    } catch (e) {
        res.status(500).end();
    }
});

module.exports = router;
