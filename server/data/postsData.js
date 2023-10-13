const database = require('../infra/database');
const constants = require('./constants');

exports.getPosts = async function() {
	const [post] = await database.execute(constants.QUERY_SELECT_TABLE) 
	return post
}

exports.getPost = async function(id) {
	const [post] = await database.execute(constants.QUERY_SELECT_BY_ID_TABLE, [id]) 
	return post
}

exports.createPost = async function(post) {
	const [postResult] = await database.execute(constants.QUERY_INSERT_INTO_TABLE, [post.title,post.content]) 
	return postResult.insertId
}

exports.updatePost = async function(id, post) {
	const postResult = await database.execute(constants.QUERY_UPDATE_TABLE, [post.title,post.content, id]) 
	return postResult
}

exports.deletePost = async function(id, post) {
	const postResult = await database.execute(constants.QUERY_DELETE_FROM_TABLE, [id]) 
	return postResult
}