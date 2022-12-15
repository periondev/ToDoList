//jshint esversion:6

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const _ = require('lodash');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const TodoTask = require('./models/db');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

//Params of mongoose connection
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Connect to mongodb atlas (connect your application)
mongoose.connect(process.env.DB_CONNECT, connectionParams, (err) => {
  if (err) {
    console.log('Connection failed.');
  } else {
    console.log('Database connected successfully.');
    app.listen(3000, () => console.log('Server is running on 3000'));
  }
});

//READ todos method
app.get('/', (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render('index.ejs', { todoTasks: tasks });
  });
});

//CREATE todos method
app.post('/', async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  try {
    await todoTask.save();
    res.redirect('/');
  } catch (err) {
    res.redirect('/');
  }
});

//UPDATE todos method
app
  .route('/edit/:id')
  .get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
      res.render('todoEdit.ejs', { todoTasks: tasks, idTask: id });
    });
  })

  .post(async (req, res) => {
    const id = req.params.id;
    await TodoTask.findByIdAndUpdate(id, { content: req.body.content });
    res.redirect('/');
  });

//DELETE todos method
app.route('/remove/:id').get((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect('/');
  });
});
