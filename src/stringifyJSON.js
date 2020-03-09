// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


function stringifyJSON(obj) {
  // your code goes here
  var res = '';
  if (typeof obj === "undefined" || typeof obj === "function") {
    res = res;
  }
  else if (typeof obj === "object") {
    if (obj === null) {
      res = 'null';
    }
    else if (Array.isArray(obj)) {
      res = res + "[";
      for (var i = 0; i < obj.length; i++) {
        if (typeof obj[i] === "undefined" || typeof obj[i] === "function") {
          continue;
        }
        if (res[res.length - 1] !== "[") {
          res = res + ',';
        }
        res = res + stringifyJSON(obj[i]);
      }
      res = res + "]";
    } else {
      res = res + "{";
      for (var key in obj) {
        if (typeof obj[key] === "undefined" || typeof obj[key] === "function") {
          continue;
        }
        if (res[res.length - 1] !== "{") {
          res = res + ',';
        }
        res = res + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
      }
      res = res + "}";
    }
  }
  else if (typeof obj === "string") {
    res = res + '\"' + obj + '\"';
  }
  else {
    res += obj;
  }
  return res;
};