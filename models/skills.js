const skills = [
    {id: 1, skill: 'Python',},
    {id: 2, skill: 'Javascript'},
    {id: 3, skill: 'Java'},
    {id: 4, skill: 'C++'},
    {id: 5, skill: 'Ruby'},
]

module.exports = {
    getAll, getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }