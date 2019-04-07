'use strict';

const module_user = ( () => {
  // private
  function User() {
    this.name = "",
    this.password = [],

    this.set_pass = (pass) => {
      if(pass.length < 8 || pass.length > 64){
        return false;
      }
    }

  }

  const with_pass = (pass) => {
    let self = new User();
    self.set_pass(pass);
    return self;
  }

  // public
  return {
    with_pass: with_pass
  }

})();
