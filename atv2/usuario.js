const sum = require('./soma');

let users = [];

function addUser(user) {
    users.push(user);
}

function getUser(id) {
    return users.find(user => user.id === id);
}

function countActiveUsers() {
    return sum(users.filter(user => user.active).length, 0);
}

module.exports = { addUser, getUser, countActiveUsers };
