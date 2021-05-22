const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
const homeController = require('../controllers/home');
const loginMiddleware = require('../middlewares/login');


/* GET home page. */
router.get('/', loginController.index);
router.post('/logar', loginController.logar);
router.get('/logout', loginController.logout);
router.get('/home', loginMiddleware, homeController.index);


module.exports = router;
