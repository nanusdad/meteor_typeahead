  Meteor.startup(function() {
    Meteor.subscribe("servers", function() {
	console.log("subscribed");
    });
    return Meteor.autorun(function() {
      items = _(Servers.find().fetch()).pluck("name");
      return console.log('items', items);
    });
  });
  Template.search.rendered = function() {
    return $('.typeahead').typeahead({
      source: function() {
        return _(Servers.find().fetch()).pluck("name");
      }
    });
  };
