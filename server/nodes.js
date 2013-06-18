    // code to run on server at startup
//Servers = new Meteor.Collection("servers");

 Meteor.startup(function () {
    if (Servers.find().count() === 0) {
      var names = ["SATURN",
                   "NEPTUNE",
                   "PLUTO",
                   "MARS",
                   "JUPITER",
                   "MERCURY"];
      for (var i = 0; i < names.length; i++)
        Servers.insert({name: names[i], score: Math.floor(Random.fraction
()*10)*5});
    }
  });

Meteor.autorun(function() {

	Meteor.publish('servers', function(){
  	//return _(Servers.find({}).fetch()).pluck('name');
  	return Servers.find({});
	});
});


/* Meteor.publish('autocompleteItems', function(query) {
  return Servers.find({
    name: new RegExp(query, 'i')
  }, {
    fields: {
      name: 1
    },
    limit: 5
  });
});
*/
