/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * 双指针 快慢指针
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//   if (!head) return head;
//   let root = new ListNode(head.val);
//   let p1 = root;
//   let p2 = head;
  
//   while(p2.next) {
//     p2 = p2.next;
//     if (p1.val !== p2.val) {
//       p1.next = new ListNode(p2.val);
//       p1 = p1.next;
//     }
//   }
//   return root;
// };

/**
 * 直接计算法
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let cur = head;
  while(cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
// @lc code=end

