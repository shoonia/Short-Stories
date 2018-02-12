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

router.post('/get-posts-by-page-index', async (req, res) => {
    const index = parseInt(req.body.index);
    const OFFSET = index > 0 ? (index - 1) * LIMIT : 0;

    try {
        const posts = await db('posts').select('*').orderBy('id', 'DESC')
            .limit(LIMIT).offset(OFFSET);

        if (posts.length > 0) {
            return res.status(200).json(posts);
        }
        res.status(404).end();
    } catch (e) {
        res.status(500).end();
    }
});

module.exports = router;
