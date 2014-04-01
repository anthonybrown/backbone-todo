/**
 * Person Model
 **/

var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe'
   ,age: 30
   ,occupation: 'street sweeper'
  }

});

/**
 * A list of People
 **/

var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

/**
 * View for all People
 **/

var PeopleView = Backbone.View.extend({
    tagName: 'ul'

  , render: function () {
      // filter through all items in a collection

      // for each, create a new PersonView

      // 
    }
});

/**
 * Person View
 **/

var PersonView = Backbone.View.extend({
    tagName: 'li'

  , template: _.template($('#personTemplate').html())
//, template: '#personTemplate'

  , initialize: function (options) {
      //this.options = options || {};
      this.render();
    }

  , render: function () {
      this.$el.html(this.template(this.model.toJSON()) );
    }
// don't like doing the template from the render method
// to keep it succinct as possible
// , render: function () {
//      var template = _.template($(this.template).html());
//      this.$el.html(template(this.model.toJSON()));
//   }

});

//var person = new Person;

//var personView = new PersonView({ model: person });

var peopleCollection = new PeopleCollection([
  {
    name: 'Tony Brown'
  , age: 47
  , occupation: 'web developer'
  }
  ,
  {
    name: 'Jeffery Way'
  , age: 27
  , occupation: 'instructor'
  }
  ,
  {
    name: 'Sally Doe'
  , age: 23
  , occupation: 'web designer'
  }

]);

//console.log(peopleCollection);

//person.el;
//$('#result').html(personView.el);


