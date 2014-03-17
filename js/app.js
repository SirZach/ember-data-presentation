App = Ember.Application.create({
  LOG_TRANSITIONS: true,

  LOG_TRANSITIONS_INTERNAL: true
});

App.Router.map(function() {
  // put your routes here
  this.route('restful');
  this.route('adapter');
  this.route('model');
  this.route('store');
  this.route('transforms');
  this.route('relationships');
  this.resource('aaron', {path: 'aaron/:aaron_id'});
  this.route('dependency-injection');
});

DS.RESTAdapter.reopen({
  host: 'http://localhost:3000',
  namespace: 'api'
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

App.Aaron = DS.Model.extend({
  name: DS.attr('string'),

  occupation: DS.attr('string'),

  favoriteBook: DS.attr('string')
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.RelationshipsRoute = Ember.Route.extend({
  model: function () {
    var post = this.store.createRecord('post', {
      id: 1,
      title: '3 Legged Black Cat',
      body: 'That guy is my homie'
    });

    var comment = this.store.createRecord('comment', {
      id: 1,
      author: 'Zach',
      message: 'Cool story, bro',
      post: post
    });

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
