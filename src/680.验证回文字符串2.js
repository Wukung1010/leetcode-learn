/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, fix = 1) {
  const len = s.length;
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    if (i > j) break;
    if (s.charAt(i) !== s.charAt(j)) {
      if (fix) {
        return validPalindrome(s.slice(i, j), 0) || validPalindrome(s.slice(i + 1, j + 1), 0);
      }
      return false;
    }
  }
  return true;
};
