Template.players.helpers({
  players: Players.find(
    {createdby: Meteor.userId()},
    {sort:{score: -1, name: +1}}
  )
});

Template.body.events({
  'submit form': function(e,t) {
    Players.insert(
      {
        createdBy: Meteor.userId(),
        name: t.find('#playerName').value,
        score: 0
      }
    );
    t.find('#playerName').value = '';
    e.preventDefault();
  }
});

Template.players.events({
  'click .remove': function(e,t) {
    Players.remove(this._id);
    e.preventDefault();
  },
  'click .increment': function(e,t) {
    // Players.update(this._id, {score: 5}); removes the document and creates a new one
    // Players.update(this._id, {$set: {score: 5}});
    Players.update(this._id, {$inc: {score: 5}});
  },
  'click .decrement': function(e,t) {
    Players.update(this._id, {$inc: {score: -5}});
  },
});
