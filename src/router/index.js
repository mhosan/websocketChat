const { Router } = require('express');
const router = Router();
const path = require('path');
const { routerInitView, routerController, routerControllerGetAll, routerControllerPost} = require('../controllers/rutasController');

router.get('/', routerInitView);

router.get('/form', routerController);

router.get('/productos', routerControllerGetAll);

router.post('/productos', routerControllerPost);

module.exports = router;