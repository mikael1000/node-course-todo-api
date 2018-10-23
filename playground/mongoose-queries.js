const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

const id = '5bcdedc40a9d71b83b44911d'

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo)
// }).catch((e) => console.log(e))

User.findById('5bcbc103bbab45140cd9e4a4').then((user) => {
    if(!user) {
        return console.log('Unable to find user')
    }

    console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log(e)
})
