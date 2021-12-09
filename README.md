# L2-Assignment-2-V2: LAP 2 Group Project: Thoughts App

### By Talha Sadak and Bethan Vaughan

## Project Description

In this assignment we were asked to create an app where users can anonymously write down their thoughts. Our app allows the user to write a post with a title, a pseudonym and a body and no login is required to create a post or visit their post.
When the user hits 'publish', their post is stored in our database.

## Installation and Usage

- To clone the project into your local machine, type git clone followed by the SSH key into the command line
- To start the server and run the project, run: `docker-compose up`
- To stop the server run: `docker-compose down`

## Challenges

- We had some difficulty with the post request sending the user input data to the database but we managed to solve this.
- We ran out of time to implement the show path

## Future features

- We will implement the show path so the user is redirected after submitting their post and can access their post via the path.

## Technologies

- HTML/CSS
- JavaScript
- Node / Express.js
- Jest / Coverage / Supertest
- Nodemon
- Docker
- SQL / Postgres
- gitignore

# Files

## Serverside:

## api:

### controllers: posts.js

## dbConfig:

### dev_seeds.sql

### init.js

### seedDev.js

## models:

### Post.js

## routes:

### posts.js

### index.js

### sever.js

## Clientside:

## js:

### requests.js

### index.html

### style.css

## db:

### create_posts.sql

## docker-compose.yaml
