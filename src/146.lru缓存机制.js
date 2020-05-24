/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.space = capacity;
  this.cache = {};
  this.time = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.hasOwnProperty(key)) {
    this.cache[key].time = ++this.time;
    return this.cache[key].value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.hasOwnProperty(key)) {
    this.cache[key].value = value;
    this.cache[key].time = ++this.time;
  } else {
    this.cache[key] = {
      time: ++this.time,
      value: value
    };
    if (this.space > 0) {
      this.space--;
    } else {
      let last;
      let del;
      for (let key in this.cache) {
        if (last === undefined || this.cache[key].time < last) {
          last = this.cache[key].time;
          del = key;
        }
      }
      delete this.cache[del];
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */