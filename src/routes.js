const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const InstructorsController = require('./controllers/InstructorsController');
const LessonsController = require('./controllers/LessonsController');

routes.get('/', IndexController.index);
// rotas de cursos
routes.post('/courses', CoursesController.create);
routes.get('/courses', CoursesController.find);
routes.get('/courses/:id', CoursesController.findById);
routes.update//('/courses', CoursesController.update);

//rotas de instrutores
routes.post('/instructors', InstructorsController.create);


//rotas de lições
routes.post('/lessons', LessonsController.create);
routes.get('/lessons', LessonsController.find);
routes.get('/lessons/:id', LessonsController.findById);

module.exports = routes;

// lessons
// courses
// instructors