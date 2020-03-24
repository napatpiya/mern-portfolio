const PetController = require('../controllers/pet.controller');
// const UserController = require('../controllers/user.controller');
// const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    // app.post('/api/register', UserController.register);
    // app.post('/api/login', UserController.login);
    
    app.get('/api', PetController.index);
    app.post('/api/pets', PetController.create);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pets/:_id', PetController.getOne);
    app.get('/api/pets/:name', PetController.getOneName);
    app.put('/api/pets/:_id', PetController.update);
    app.delete('/api/pets/:_id', PetController.delete);
}