import {User} from './models.js'
import {UserController} from './controllers.js'

/*
ASCI builder functions
*/
const charMul = (char, num) => {
  let r = '';
  for(let i = 0; i < num; i++){
    r += char;
  }
  return r;
}

/* TODO:
Steps:
  - load the ui (async)
  - connect to the db (async)
*/

/*
Database Connection
*/
if(!window.indexedDB){
  console.log("Your browser does not support indexedDB.");
}

const idb = window.indexedDB;

let db;
let req = idb.open("testdb");

req.onerror = (event) => {
  console.log("Error.")
};

req.onsuccess = (event) => {
  console.log("Success");
  db = event.target.result;
  console.log(db);
};

console.log(idb);

/*
UI Behavior
*/
const title = ".__[ Strengthology ]__.";

let view1 = new Vue({
  el: '#nav',
  data: {
    header: title,
    art: charMul('- ', title.length - 2) + '-',
  }
}));
