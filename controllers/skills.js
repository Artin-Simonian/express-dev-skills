const skill = require('../models/skills')


module.exports = {
    index,
    show
};

function show(res, res){

    // Do not use a leading slash when rendering
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    })
}

function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
  }