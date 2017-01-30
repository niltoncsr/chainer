var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '#app',
	data: {
		activities: {}
	},

	methods: {
		register: function() {
			var year = (new Date()).getFullYear(),
					month = (new Date()).getMonth(),
					day = (new Date()).getDate();

			if(!this.activities.year)
				this.activities.year = {}

			if(!this.activities.year.month)
				this.activities.year.month = {}

			if(!this.activities.year.month.day)
				this.activities.year.month.day = this.description
		}
	}
});
