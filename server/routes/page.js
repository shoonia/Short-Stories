const express = require('express');

const db = require('../db');

const router = express.Router();
const LIMIT = 8;

router.post('/init', async (req, res) => {
    try {
        const [data] = await db('posts').count('id AS count');
        const pageCount = Math.ceil( (data.count || 1) / LIMIT );
        res.status(200).json({ pageCount });
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

router.post('/get-post-by-id', async (req, res) => {
    const id = parseInt(req.body.id);

    if (isNaN(id) || id < 1) {
        return res.status(400).end();
    }

    try {
        const [post] = await db('posts').where({ id });

        if (post !== undefined) {
            return res.status(200).json(post);
        }
        res.status(404).end();
    } catch (e) {
        res.status(500).end();
    }
});

module.exports = router;
