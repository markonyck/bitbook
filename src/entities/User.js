export class User {
    constructor(userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount, lastPostDate) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.aboutShort = aboutShort;
        this.about = about;
        this.avatarUrl = avatarUrl ? avatarUrl : "http://via.placeholder.com/100x100";
        this.postsCount = postsCount;
        this.commentsCount = commentsCount;
        this.lastPostDate = lastPostDate ? new Date(lastPostDate) : null;
    }

    getTimeForLastPostDate = () => {
        if (!this.lastPostDate) {
          return "User has no posts yet."
        }
        const milSecundsFromLastPost = Date.now() - this.lastPostDate.getTime();
        const numOfMilSecInDay = 1000*60*60*24;
        const min = ('0'+this.lastPostDate.getMinutes()).slice(-2);
        const hour = ('0'+this.lastPostDate.getHours()).slice(-2);
        const day = ('0'+this.lastPostDate.getDate()).slice(-2);
        const month = ('0'+(this.lastPostDate.getMonth() + 1)).slice(-2);
        const year = this.lastPostDate.getFullYear();
        if (milSecundsFromLastPost>numOfMilSecInDay) {
          return `${day}.${month}.${year} ${min}:${hour}`;
        }
        return `at ${hour}:${min}`;
      }
}