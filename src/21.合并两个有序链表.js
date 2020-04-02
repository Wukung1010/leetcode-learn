/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * 递归算法
 *  1、比对节点
 *  2、推入小的节点，之后将该节点后移一位
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const root = new ListNode('');
  let cur = root;
  while(1) {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        cur.next = new ListNode(l2.val);
        l2 = l2.next;
      } else {
        cur.next = new ListNode(l1.val);
        l1 = l1.next;
      }
      cur = cur.next;
    } else if (l1) {
      cur.next = l1;
      break;
    } else {
      cur.next = l2;
      break;
    }
  }
  return root.next;
};
// @lc code=end

