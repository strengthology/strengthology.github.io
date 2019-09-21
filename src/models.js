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
