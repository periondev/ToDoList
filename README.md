# ToDoList

一個簡單的用 EJS 寫的 ToDoList 單網頁 CRUD app 應用程式。

# Function

- Read 讀取儲存於 MongoDB Atlas 資料庫的 ToDo 項目
- Add 新增 ToDo 項目
- Delete 刪除 ToDo 項目
- Edit 編輯 Todo 項目

# Demo

![screenshot](/Preview/Peri-ToDoList-01.png)
![screenshot](/Preview/Peri-ToDoList-02.png)

# Getting this project up and running

1. Must have MongoDB Atlas connecting string
   Get connection string tutorial:
   https://www.mongodb.com/docs/guides/atlas/connection-string/

2. Fork or Clone
   Fork or clone this project from Github to get your own copy of it.

3. Create .env file
   create `.env` file at the root of project, inside .env file add `DB_CONNECT` as env variable then paste your MongoDB Atlas connecting string:

```
// .env

DB_CONNECT = <your connecting string>
```

4. Install all the dependencies
   run:

```
npm install
```

5. Run deploy command:

```
npm start
```

now the site is running at http://localhost:3000

you can start developing the ToDoList!

# Tech

- EJS
- Node.js
- Express
- Mongoose
