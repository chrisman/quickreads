// localstorageservice.js
module.exports = function(){
  function set(key, value) {
    localStorage.setItem(key, value);
  }

  function get(key) {
    return localStorage.getItem(key);
  }

  return {
    set: set,
    get: get
  };
}
