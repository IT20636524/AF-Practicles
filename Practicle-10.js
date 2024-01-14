// Callbacks

var users = ['John', 'Kate', 'Dave'];

function addUser(username, callback) {
    setTimeout(function () {
        users.push(username);
        callback();
    },3000)
}

function getUser() {
    setTimeout(function () {
        console.log(users);
    },1000)
}

addUser('Jane', getUser); //should be print all 4 names
//getUser();