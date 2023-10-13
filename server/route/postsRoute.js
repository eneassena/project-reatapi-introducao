const express = require('express');
const HttpCode = require('http-status-codes');
const router = express.Router();
const bodyParser = require('body-parser');
const postsService = require('../service/postsService');

// parse application/json
router.use(bodyParser.json())

router.get('/posts', async function(req, res) {
	const posts = await postsService.getPosts();
	res.status(HttpCode.StatusCodes.OK).json(posts);
});

router.get('/posts/:id', async function(req, res) {
	const post = await postsService.getPost(req.params.id)
	res.status(HttpCode.StatusCodes.OK).json(post)
});

router.post('/posts', async function(req, res) {
	let postData = {
		title: String(req.body.title),
		content: String(req.body.content)
	}
	const postResult = await postsService.createPost(postData)
	res.status(HttpCode.StatusCodes.CREATED).json({insert_last_id: postResult})
});

router.put('/posts/:id', async function(req, res) {
	let paramID = parseInt(req.params.id)
	let postData = {
		title: String(req.body.title),
		content: String(req.body.content)
	}
	await postsService.updatePost(paramID, postData)
	res.status(HttpCode.StatusCodes.NO_CONTENT).json(null)
});


router.delete('/posts/:id', async function(req, res) {
	let paramID = parseInt(req.params.id)
	await postsService.deletePost(paramID)
	res.status(HttpCode.StatusCodes.NO_CONTENT).json(null)
});

module.exports = router;