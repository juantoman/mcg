Template.badgesList.helpers({
  badgesList: function() {
    return badges.find({classId: Session.get('classId')});
  }
});

Template.badgesList.events({
  'submit form': function(event) {
    event.preventDefault();
    var badge = {
      classId: Session.get('classId'),
      badgeDescription: $(event.target).find('[name=badgeDescription]').val(),
      points: $(event.target).find('[name=badgePoints]').val(),
      createdOn: new Date()
    };
    Meteor.call('badgeInsert', badge);
  },
  'change .inputGroup': function(event) {
    event.preventDefault();
    if (event.currentTarget.value )
    {
      if (event.target.id=="inputDesc")
      {
        Meteor.call('badgeUpdateDesc', event.target.name, event.currentTarget.value);
      } else {
        Meteor.call('badgeUpdatePoints', event.target.name, event.currentTarget.value);
      }
    } else {
      Meteor.call('badgeDelete',event.target.name);
    }
  }
});
