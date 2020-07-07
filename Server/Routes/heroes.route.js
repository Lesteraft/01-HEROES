//Importar Express
const express = require('express');
//Inicializar las rutas
const router = express.Router();
//requerir modelo
const heroesController = require('../Controllers/heroes.controller.js');
//Ingreso de imagines
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './frontend/src/assets/img')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
});
const upload = multer({storage: storage});

//Ruta con dirección '/' responderá un JSON
router.get('/', heroesController.getHeroes);
// router.post('/create', upload.single('file'),
router.post('/create', upload.array('files'), heroesController.createHero);
// router.post('/saveImg', multipartyMiddleware, heroesController.saveImg);
router.get('/show/:id', heroesController.getHero);
router.put('/edit/:id', heroesController.editHero);
router.delete('/delete/:id', heroesController.deleteHero);

//Exportar el módulo de rutas
module.exports = router;
