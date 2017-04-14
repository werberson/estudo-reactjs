const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOption({new : true, runValidators: true})

module.exports = Todo