App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('restful');
  this.route('adapter');
  this.route('model');
  this.route('store');
  this.route('transforms');
  this.route('relationships');
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),

  body: DS.attr('string'),

  comments: DS.hasMany('comment')
});

App.Comment = DS.Model.extend({
  author: DS.attr('string'),

  message: DS.attr('string'),

  post: DS.belongsTo('post')
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.RelationshipsRoute = Ember.Route.extend({
  model: function () {
    var comment = this.store.createRecord('comment', {
      id: 1,
      author: 'Zach',
      message: 'Cool story, bro'
    });

    var post = this.store.createRecord('post', {
      id: 1,
      title: '3 Legged Black Cat',
      body: 'That guy is my homie'
    });

    comment.set('post', post);

    return this.store.find('post', 1);
  },

  actions: {
    save: function (post) {
      post.save().then(function (p) {
        debugger;
      }, function (error) {
        debugger;
      });
    }
  }
});
