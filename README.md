<h1 align="center">MERN BLOG</h1>
<div align="center">
	<a href="#showcase">Showcase</a>
  <span> • </span>
    	<a href="#tech-stack">Tech Stack</a>
  <span> • </span>
    	<a href="#requirement">Requirement</a>
   <span> • </span>
	<a href="#setup-project">Setup Project</a>
   <span> • </span>
	<a href="#start-project">Start Project</a>
    <span> • </span>
	<a href="#contributor">Contributor</a>
  <p></p>
</div> 


**DESCRIPTION** : This is a simple MERN stack workshop about web blog. Other user can read blog only but admin can create, read, update and delete blog.
This is a simple web application that I have learned from udemy course [click here](https://www.udemy.com/course/javascript-mern-stack/). You can clone it and learn it, enjoy with mern stack kub!.

## Showcase
![image](https://user-images.githubusercontent.com/86193685/235557715-fad655b1-ff48-4160-b3c1-fab87cc0c759.png)
![image](https://user-images.githubusercontent.com/86193685/235558279-f4d79429-c691-48e7-80ba-de8cb181e6e9.png)
![image](https://user-images.githubusercontent.com/86193685/235558224-7cfe5921-2592-47c4-a180-570ae900c2d7.png)


<br>

## Tech Stack
- <b>Frontend</b> [React Javascript](https://react.dev/) with [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- <b>Backend</b>  [Express](https://expressjs.com/) [Node.js](https://nodejs.org/en)
- <b>Database</b> [MongoDB](https://www.mongodb.com/)
<br>

## Requirement
1. [Yarn (1.22.xx)](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
```bash
npm install --global yarn
```
2. [Node.js (18.xx.xx)](https://nodejs.org/en)
<br>

## Setup Project
#### 1. Clone project
```bash
git clone https://github.com/Bourbxn/mern-web-blog.git
```

#### 2. Setup Database
1. Login to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
2. Create schema and copy database url to connect in backend part


#### 3. Setup Backend
1. Install package
```bash
cd server
npm i
```
2. Create file ```.env``` in ```mern-web-blog/server/.env``` and add
```env
PORT=5500
DATABASE=<database-url>
JWT_SECRET=mern-stack-crud-secret@12345
PASSWORD=admin123
```

#### 3. Setup Frontend
Install package
```bash
cd client
yarn
```
<br>

## Start Project
#### 1. Backend
```bash
cd server
node server.js
```
#### 2. Frontend
```bash
cd client
yarn dev
```
#### 3. Start project at ```http://localhost:3000/```
<br>

## Contributor

<div>
<span>
<a href="https://github.com/Bourbxn">
 <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/86193685?v=4&h=80&w=80&fit=cover&mask=circle&maxage=7d"/>
</a>
</span>







