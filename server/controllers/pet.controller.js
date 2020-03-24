const { Pet } = require('../models/pet.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.getAll = (request, response) => {
    Pet.find({}).sort("type").exec()
        .then(pets => {
            response.json(pets)
        })
        .catch(err => response.json(err));
}

module.exports.getOne = (req, res) => {
    Pet.findOne({"_id": req.params._id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.getOneName = (req, res) => {
    Pet.findOne({"name": req.params.name})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.create = (request, response) => {
    const { name, type, desc, skill1, skill2, skill3, like } = request.body;
    Pet.create({
        name,
        type,
        desc,
        skill1,
        skill2,
        skill3,
        like
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.update = (req, res) => {
    Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then(updateActivity => res.json(updateActivity))
        .catch(err => res.json(err));
}

module.exports.delete = (req, res) => {
    Pet.findByIdAndDelete({_id: req.params._id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err));
}