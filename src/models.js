class Session {
    constructor(){
        this.date = "";
        this.time = "";
        this.sets = [];
    }
}

class Set {
    constructor(){
        this.movement = "";
        this.reps = 0;
        this.time = 0;
        this.rpe = 0;
    }
}

class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

export {User, Set, Session};
