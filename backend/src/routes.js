const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const uploads =  multer(uploadConfig);
const routes = express.Router();

routes.post('/sessions', SessionController.store);


routes.get('/spots', SpotController.index);
routes.post('/spots', uploads.single('thumbnail'),  SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;