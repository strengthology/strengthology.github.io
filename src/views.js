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
