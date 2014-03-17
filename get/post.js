module.exports = {
	path: '/api/posts/:id?',
	template: {
		id: function(params) {
            return params.id || 1;
        },
        name: 'Lars',
        status: 'OK'
    }
};
