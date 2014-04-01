/**
 * Lack of semicolons and comma first are style preferences
 * Basic Model View Collection and Router
 * Task or Todo app with BackboneJS
 *
 */

;(function ($, window, document, undefined) {

  'use strict';


  window.App = {
    Models: {}
  , Collections: {}
  , Views: {}
  }

  window.template = function (id) {
    return _.template( $('#'+id).html() )
  }

  $('#input').focus()

  App.Models.Task = Backbone.Model.extend({
    validate: function (attrs, options) {
      if (! $.trim(attrs.title) ) {
        return 'A task requires a valid title'
      }
    }
  })

  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task
  })

  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul'

  , initialize: function () {
      this.collection.on('add', this.addOne, this)
    }

  , render: function () {
      this.collection.each(this.addOne, this)

      return this
    }

  , addOne: function (task) {
      var taskView = new App.Views.Task({model: task})
      this.$el.append(taskView.render().el)
    }
  })

  App.Views.Task = Backbone.View.extend({
    tagName: 'li'

  , template: template('todoTemplate')

  , initialize: function () {
      this.model.on('change', this.render, this)
      this.model.on('destroy', this.remove, this)
    }

  , events: {
      'click .edit': 'editTask'
    , 'click .delete': 'destroy'
    }

  , destroy: function() {
      this.model.destroy()
    }

  , editTask: function () {
      var newTaskTitle = prompt('what would you like to change the text to?'
        , this.model.get('title'))

        if (!newTaskTitle) return

      this.model.set({'title': newTaskTitle},{validate: true})
    }

  , render: function () {
      var template = this.template(this.model.toJSON())
      this.$el.html(template)

      return this
    }

  , remove: function() {
      this.$el.remove()
    }
  })

  App.Views.AddTodo = Backbone.View.extend({
    el: '#addTodo'

  , events: {
      'submit': 'submit'
    }

  , initialize: function () {

    }

  , submit: function (e) {
      e.preventDefault()

      var newTodoTitle = $(e.currentTarget).find('input[type=text]').val()

<<<<<<< HEAD
      var task = new App.Models.Task({ title: newTodoTitle })
      if (! newTodoTitle ) return
=======
      var task = new App.Models.Task({ title: newTodoTitle },{validation: true})
      if ( ! newTodoTitle ) return
>>>>>>> gh-pages
      this.collection.add(task)

      var input = $('#input')
      input.val('')
      input.focus()

    }

  })



  // change back to var tasksCollection
  // window.tasksCollection just makes it available in the console
  var tasksCollection = new App.Collections.Tasks([])

  var addTaskView = new App.Views.AddTodo({ collection: tasksCollection })

  var tasksView = new App.Views.Tasks({ collection: tasksCollection })

  $('#result').append(tasksView.render().el)
  $('#input').val('')

}(jQuery, window, document))
