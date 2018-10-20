var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
})

var newTodo = new Todo({
    text: 'Cook dinner'
})

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// })

var newTodo2 = new Todo({
    text: 'Walk the dog',
    completed: true,
    completedAt: 27/10/2017
})

newTodo2.save().then((doc) => {
    console.log('Saved todo')
    console.log(JSON.stringify(doc, undefined, 2))
}, (e) => {
    console.log('Unable to save todo', e)
})
