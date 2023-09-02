const skills = [
    {id: 1, skill: 'Python',},
    {id: 2, skill: 'Javascript'},
    {id: 3, skill: 'Java'},
    {id: 4, skill: 'C++'},
    {id: 5, skill: 'Ruby'},
]

module.exports = {
    getAll, getOne, create, deleteOne
  };

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }
	
  function getAll() {
    return skills;
  }

  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }