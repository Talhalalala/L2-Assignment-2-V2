const db = require("../dbConfig/init");
const { all, post } = require("../server");

module.exports = class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.story = data.story;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(`SELECT * FROM posts;`);
        let posts = postData.rows.map((p) => new Post(p));
        // we're taking all of the rows/things from db, saying make a new Post for each one
        resolve(posts);
      } catch (err) {
        reject("Post not found!");
      }
    });
  }
  // need this function to display just one post/ a particular post at a time
  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [
          id,
        ]);
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Post not found");
      }
    });
  }

  static async create(postData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, author, story } = postData;
        let result = await db.query(
          `INSERT INTO posts (title, author, story) VALUES ($1, $2, $3) RETURNING *;`,
          [title, author, story]
        );

        let newPost = new Post(result.rows[0]);
        resolve(newPost);
      } catch (err) {
        reject("Post could not be created");
      }
    });
  }
};
