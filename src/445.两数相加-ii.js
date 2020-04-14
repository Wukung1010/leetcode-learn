/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  while(l1.next) {
    l1.next.before = l1;
    l1 = l1.next;
  }
  while(l2.next) {
    l2.next.before = l2;
    l2 = l2.next;
  }
  let add = false;
  let result;
  while(l1 || l2) {
    let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (add ? 1: 0);
    const newNode = new ListNode(num % 10);
    add = num / 10 >= 1;
    if (!result) {
      result = newNode;
    } else {
      newNode.next = result;
      result = newNode;
    }
    l1 && (l1 = l1.before);
    l2 && (l2 = l2.before);
  }
  if (add) {
    const newNode = new ListNode(1);
    newNode.next = result;
    result = newNode;
  }
  return result;
};
// @lc code=end
