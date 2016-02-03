Template.players.helpers({
  players: Players.find()
});

Template.body.events({
  'submit form': function(e,t) {
    Players.insert({name: t.find('#playerName').value, score: 0});
    t.find('#playerName').value = '';
    e.preventDefault();
  }
});
