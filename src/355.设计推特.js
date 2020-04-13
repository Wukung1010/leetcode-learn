/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.followMap = {};
  this.users = {};
  this.index = 0;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  const info = this.users[userId] || [];
  info.push({
    id: tweetId,
    time: this.index++
  });
  this.users[userId] = info;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const follow = this.followMap[userId];
  const arr = [];
  const news = this.getNews(userId);
  if (news) {
    arr.push(news);
  }
  if (follow) {
    follow.forEach((followId) => {
      const news = this.getNews(followId);
      if (news) {
        arr.push(news);
      }
    });
  }
  const result = [];
  for(let i = 0; i < 10; i++) {
    let temp, index;
    arr.forEach((news, i) => {
      if (news.length > 0) {
        const n = news[news.length - 1];
        if (!temp || temp.time < n.time) {
          temp = n;
          index = i;
        }
      }
    });
    if (temp) {
      arr[index].pop();
      result.push(temp);
    }
  }
  return result.map((item) => item.id);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followerId === followeeId) return;
  const follow = this.followMap[followerId] || new Set();
  follow.add(followeeId);
  this.followMap[followerId] = follow;
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  const follow = this.followMap[followerId];
  if (follow && follow.has(followeeId)) {
    follow.delete(followeeId);
  }
};

Twitter.prototype.getNews = function(userId, num = 10) {
  const info = this.users[userId];
  if (info) {
    if (info.length > num) {
      return info.slice(info.length - num, info.length);
    } else {
      return info.concat();
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

