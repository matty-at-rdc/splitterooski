const  get = require('lodash.get')
o = {x: {y: {z: "happy"}}}
console.log(get(o, "x.y.z"))