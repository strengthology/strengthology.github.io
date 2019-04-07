(() => {
  // runtime imports
  const Option = ModOption;
  const User = ModUser;

  console.log("Running test.js");

  // Option Tests
  {
    console.assert(Option !== undefined);
    console.assert(Option.some !== undefined);
    console.assert(Option.none !== undefined);

    var obj = Option.some("String");
    console.assert(obj.has_some());
    console.assert(!obj.has_none());
    console.assert(obj.unwrap() === "String");
  }

})();
