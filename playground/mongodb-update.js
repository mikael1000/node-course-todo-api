// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server.')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bcb27d36f583fbefd4ddb6f')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bc9e60c11a6bb27dc1c9287')
    }, {
        $set: {
            name: 'Tomten'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // db.collection('Users').findOneAndUpdate({
    //     name: 'Mike'
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // db.close()
})
