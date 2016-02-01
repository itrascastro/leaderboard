Template.players.helpers({
  players: [
    {name: 'John', score: 5},
    {name: 'Larry', score: 10},
    {name: 'Kevin', score: 15},
    {name: 'Robert', score: 20}
  ]
});

Template.players.events({
  'click .player': function(e, t) {
    return alert(this.name);
  }
});