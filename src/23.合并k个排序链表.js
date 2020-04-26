/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  lists = lists.filter((item) => item);
  if (lists.length === 0) return null;
  let root = new ListNode();
  let cur = root;
  while(lists.length !== 0) {
    let min = 0;
    let val = lists[0].val;
    for (let i = 1; i < lists.length; i++) {
      if (lists[i].val <= val) {
        min = i;
        val = lists[i].val;
      }
    }
    cur.next = new ListNode(val);
    cur = cur.next;
    if (lists[min].next) {
      lists[min] = lists[min].next;
    } else {
      lists.splice(min, 1);
    }
  }
  return root.next;
};
// @lc code=end

