import {User} from './models.js'
import {UserController} from './controllers.js'

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
