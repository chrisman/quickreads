// localstorageservice.js
module.exports = function(){
  function set(key, value) {
    localStorage.setItem(key, value);
  }

  function get(key) {
    return localStorage.getItem(key);
  }
  
  function del(key) {
    if(localStorage.getItem(key))
      localStorage.removeItem(key)
  }

  return {
    set: set,
    get: get,
    del: del
  };
}
