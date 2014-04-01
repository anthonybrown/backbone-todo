// Backbone version

var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe'
  , age: 30
  , occupation: 'worker'
  }

  , validate: function (attrs, options) {
      if (attrs.age < 0 || attrs.age == null) {
        return 'age can not be negative, you knucklehead!';
      }

      if (! attrs.name) {
        return 'Every person needs a name';
      }
    }
  , work: function () {
      return this.get('name') + ' is working.'+
        ' he is a '+ this.get('occupation');
    }
});

var person = new Person({
  name: 'Tony'
 ,occupation: 'web guy'
});

//if (!person.isValid()) {
//  console.log(person.get('age')+ '  '+person.validationError)
//}


person.on('invalid', function (model, error) {
  console.log((model.get('name')+ ' '+error));
});

//person.save({
//  age: 47
//, name: 'Tony Brown'
//, occupation: 'web developer'
//});




//(function($, window, document, undefined){
//  // body...
//   Person = function (config) {
//    this.name       = config.name;
//    this.age        = config.age;
//    this.occupation = config.occupation
//  };
//
//  Person.prototype.work = function () {
//    return this.name + ' is working, his occupation is a '+
//    this.occupation+ "."
//  };
//
//  var tony = new Person({
//    name: 'Tony Brown'
//  , age: 47
//  , occupation: 'web developer'
//  });
//
//  console.log(tony.work());
//
//}(jQuery, window, document));
//
