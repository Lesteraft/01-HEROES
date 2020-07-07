const HeroesModel = require('../Models/heroes.model');
const heroesController = {};


heroesController.getHeroes = async (req, res) => {
  const heroes = await HeroesModel.find();
  res.json(heroes);
};

heroesController.createHero = async (req, res) => {
  const files = req.files;
  let status;
  if (!files) {
    const error = new Error('NO IMAGE');
    error.httpStatusCode = 400;
    res.status(400).send(error);
  }
  if (req.body.nombre && req.body.aparicion && req.body.casa && req.body.bio && req.body.img) {
    status = 'Heroe almacenado correctamente';
    const hero = new HeroesModel(req.body);
    await hero.save();
    console.log(hero);
  } else {
    const error = new Error('Dato no válido');
    error.httpStatusCode = 400;
    res.status(400).send(error);
  }
  res.json({
    status: status,
    req: req.body
  });
};

heroesController.getHero = async (req, res) => {
  const hero = await HeroesModel.findById(req.params.id);
  console.log(hero);
  res.json({
    status: 'Received',
    hero: hero
  });
};

heroesController.editHero = async (req, res) => {
  const hero = {
    nombre: req.body.nombre,
    bio: req.body.bio,
    img: req.body.img,
    aparicion: req.body.aparicion,
    casa: req.body.casa
  };
  await HeroesModel.findByIdAndUpdate(req.params.id, {$set: hero}, {new: true});
  res.json({
    status: 'Hero is updated'
  })
}

heroesController.deleteHero = async (req, res) => {
  await HeroesModel.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Hero is destroyed'
  })
}



module.exports = heroesController;
