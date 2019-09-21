const T = (obj) => { return Object.keys(func).toString() }

const typesEq = (a , b) => { return T(a) == T(b) }

const isString = (a) => { return typeof(a) === "string" }

const isNum = (a) => { return typeof(a) === "number" }

const isObj = (a) => { return typeof(a) === "obj" }

const ref = (t, v) => {
  return typeof(t) === "string" && typeof(v) === "object" ? {t: t,val: v} : undefined
}

let _types = []

const _hasType = (type) => {
  for(let t of _types){
    type == t ? return true : continue
  }
}

const typedef = (type) => {
  isString(type) && _hasType(type) ? return undefined : _types.add.push(type)
}
