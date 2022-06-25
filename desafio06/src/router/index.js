const { Router } = require('express');
const router = Router();
const path = require('path');
const { routerController, routerControllerGetAll, routerControllerPost} = require('../controllers/rutasController');

router.get('/', routerController);

router.get('/productos', routerControllerGetAll);

router.post('/productos', routerControllerPost);

module.exports = router;