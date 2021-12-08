const db = require('../dbConfig/init');
const { all, post } = require('../server');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.story = data.story;
    };

    static get all(){
        return new Promise(async (resolve, reject) => {
            try{
                let postData = await db.query('SELECT * FROM posts');
                let posts = postData.rows.map(p => new Post(p));
                resolve (posts);
            } catch (err) {
                reject('Post not found!');
            }
        });
    };

    static async create(postData){
        return new Promise (async (resolve, reject) => {
            try {
                const { title, author, story} = postData;
                let result = await db.query('INSERT INTO posts (title, author, story) VALUES ($1, $2, $3) RETURNING *;',
                [title, author, story]);
                resolve (result.rows[0]);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };
};

