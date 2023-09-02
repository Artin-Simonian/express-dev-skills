const skill = require("../models/skills");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skills" });
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  // Todo.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect("/skills");
}

function show(res, res) {
  // Do not use a leading slash when rendering
  res.render("skills/show", {
    skill: skill.getOne(req.params.id),
    // Don't forget to add the comma above
    title: "Skills Details",
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: skill.getAll(),
    title: 'All skills'
  });
}
