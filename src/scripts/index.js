var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '#app',
	data: {
		activities: {}
	},

	methods: {
		register: function() {
			var today = new Date();
			this.activities[today.getFullYear()] = {
				[today.getMonth()]: {
					[today.getDate()]: 'I created a GitHub repo with very useful code snippets used internally'
				}
			};
		}
	}
});
