
// src/app.js
console.log(".__[Strengthology]__.");

var nav = new Vue({
  el: '#nav',
  data: {
    header: '.__[Strengthology]__.',
    art: 'no art :('
  }
});
// src/controllers.js
class UserController {
  constructor(){
    this.html = "";
  }
}

class SessionController {
  constructor(){
    this.html = "";
  }
}

class SetController {
  constructor() {
    this.html = "";
  }
}

export {UserController,SessionController,SetController};
// src/models.js
const users = {
  id: 0,
  name: "",
  password: "",
}

const movements = {
  id: 0,
  name: "",
}

const sessions = {
  id: 0,
  date: "",
  duration: 0, // in minutes
  volume: 0, // real
}

const sessionsToUsers = {
  userId: 0,
  sessionId: 0,
}

const sets = {
  id: 0,
  movementId: 0,
  reps: 0,
  weight: 0,
  rpe: 0,
  duration: 0,
  tempo: 0,
  volume: 0,
}

const setsToSessions = {
  setId: 0,
  userId: 0,
}

//export {User, Set, Session};
// src/repos.js
class Database {
  constructor(){
    this.exists = false;
  }
}

export {Database};
// src/views.js
class UserLogin {
  constructor(){
    this.html = "";
    this.username = "";
    this.password = "";
  }
}

class User {
  constructor(){
    this.login = {};/*<UserLogin>*/
    this.sessions = [];/*<Session>*/
  }
}

export {User, UserLogin};
