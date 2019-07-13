function Heap(){
  this._type = [];
  this._raw = [];

  this.add = (func) => {
      this._type.add(Object.keys(func).toString());
      this._raw.add(func);
  }

  this._len = () => {
    return (this._type.length + this._raw.length) >> 1
  }

  this.at = (index) => {
      if(index < this._len()){
        return {
          t: this._type.get(index),
          x: this._raw.get(index),
        }
      }
      return undefined;
  }
}

function Option(input){
  if(typeof(input) === undefined){
    this._none = undefined;
  }else{
    this._some = input;
  }

  this.hasSome = () => {
    return this._some != undefined;
  }

  this.hasNone = () => {
    return this._none != undefined;
  }
}

export {Heap, Option};
