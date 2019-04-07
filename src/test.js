(() => {
  const user = module_user;

  console.log("Running test.js");

  console.assert(user != undefined);

  console.log(user);

  //console.assert(user.with_pass("lorem") === false);

})();
