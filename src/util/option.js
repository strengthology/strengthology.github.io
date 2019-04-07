'use strict';

const ModOption = (() => {

  function Option(){
    this.some = {};

    this.has_some = () => {
      if(typeof(this.some !== undefined)){
        return true;
      }
      return false;
    }

    this.has_none = () => {
      return !this.has_some();
    }

    this.unwrap = () => {
      if(this.has_none() === true){
        throw new FatalError(`Unwrap of ${this} failed.`);
      }
      return this.some;
    }

  }

  const some = (obj) => {
    if(typeof(obj) === undefined){
      throw new FatalError(`Option cannot be given some value of undefined.`);
    }
    let self = new Option();
    self.some = obj;
    return self;
  }

  const none = () => {
    let self = new Option();
    self.some = undefined;
    return self;
  }

  return {
    some: some,
    none: none,
  }

})();
