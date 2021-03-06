(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone'<% if (!_.isEmpty(inherit)) { %>,
		'regions/<%= inherit %>'<% } %>
	],
	function( <%= _.classify('backbone') %><% if (!_.isEmpty(inherit)) { %>, <%=_.classify(inherit)%><% } %> ) {

		/* Return a Region class definition */
		return <% if (!_.isEmpty(inherit)) { %><%=_.classify(inherit)%>.extend <% } else { %>Backbone.Marionette.Region.extend<% } %>({
		
			initialize: function() {
				console.log("initialize a <%= _.classify(name) %> Region");
			}
		});

	});
}).call( this );