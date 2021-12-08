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
                let postData = await db.query('SELECT id FROM posts');
                let posts = postData.rows.map(b => new post(b));
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
                [title, author, abstract]);
                resolve (result.rows[0]);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };
};

