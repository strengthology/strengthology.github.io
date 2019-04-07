(() => {
  // runtime imports
  const User = ModUser;

  console.log("Running test.js");

  console.assert(User != undefined);
  console.assert(User.with_pass("loremipsum") != undefined);

  let u = User.with_pass("loremipsum");
  console.log(u);

  console.log(User);

})();
