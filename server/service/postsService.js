const postsData = require('../data/postsData');

const getPosts = () => {
	return postsData.getPosts();
}

const getPost = (id) => {
	return postsData.getPost(id);
}

const createPost = (post) => {
	return postsData.createPost(post)
}

const updatePost = (id, post) => {
	return postsData.updatePost(id, post)
}

const deletePost = (id) => {
	return postsData.deletePost(id)
}

module.exports = {
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost
}
