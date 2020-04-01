/**
 * 2020-04-01
 * 实现 Trie (前缀树)
 */

/**
 * 拆分字符，每个字符作为一个节点
 * 每个节点代表一个字符，且记录是否有当前节点截至的词（isEnd）
 */

/**
 * Initialize your data structure here.
 */
function TrieNode (value) {
  this.value = value;
  this.isEnd = false;
  this.children = {};
  this.has = function (str) {
      return this.children[str];
  }
  this.add = function (node) {
      this.children[node.value] = node;
  }
}
var Trie = function() {
  this.root = new TrieNode();
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
      const str = word.charAt(i);
      let child = node.has(str);
      if (!child) {
          child = new TrieNode(str);
          node.add(child);
          
      }
      node = child;
  }
  node.isEnd = true;
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.root;
  let has = true;
  for (let i = 0; i < word.length; i++) {
      node = node.has(word.charAt(i));
      if (!node) {
          has = false;
          break;
      }
  }
  return has && node.isEnd;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  let has = true;
  for (let i = 0; i < prefix.length; i++) {
      node = node.has(prefix.charAt(i));
      if (!node) {
          has = false;
          break;
      }
  }
  return has;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/