module.exports = {
  path: '/api/aarons/:id?',
  template: {
    aaron: {
      id: function(params) {
        return params.id || 1;
      },
      name: 'Aaron',
      occupation: 'Highlander',
      favoriteBook: 'Javascript: The Good Parts'
    }
  }
};
