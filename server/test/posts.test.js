const axios = require('axios');
const assert = require('node:assert');
 
test('Should get posts', async function () {
    
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });

    const posts = response.data;
    let length = 6;
	expectPost = {
		id: 2,
		title: "ola-mundo",
		content: "Hello",
		date: "2023-10-12T05:53:04.000Z"
	}
    assert.equal(length, posts.length)
});


test('Should get posts by id', async function () {
    
    const response = await axios({
        url: 'http://localhost:3000/posts/2',
        method: 'get'
    });

    const posts = response.data[0];
	expectPost = {
		id: 2,
		title: "ola-mundo",
		content: "Hello",
		date: "2023-10-12T05:53:04.000Z"
	}
    assert.equal(expectPost.id, posts.id);
    assert.equal(expectPost.title, posts.title);
    assert.equal(expectPost.content, posts.content);
    assert.equal(expectPost.date, posts.date);
});