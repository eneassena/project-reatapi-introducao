const axios = require('axios');

test('Should get posts', async function () {
    
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });

    const posts = response.data;
    expect(posts).toHaveLength(3);
    const [firstPost] = posts;

    expect(firstPost.id).toBe(1);
    expect(firstPost.title).toBe('Reat Api Documentação');
    expect(firstPost.cotent).toBe('...');
    expect(firstPost.date).toBe('2021-01-31T01:07:53.873Z');

});
