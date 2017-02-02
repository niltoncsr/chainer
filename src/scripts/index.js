var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '#app',
	data: {
		activities: {},
		trackedToday: false
	},


	created: function() {
		// Create key in localStorage or set the actual content to the app
		if(!localStorage.chainerActivities)
			localStorage.setItem('chainerActivities', JSON.stringify({}));
		else
			this.activities = JSON.parse(localStorage.getItem('chainerActivities'));
	},


	methods: {
		// Track the present day in to the app and save it on localStorage
		trackToday: function() {
			var today = new Date(),
					currentYear = today.getFullYear(),
					currentMonth = today.getMonth() + 1,
					currentDay = today.getDate();

			if(!this.activities[currentYear]) {
				this.activities[currentYear] = {};
			}

			if(!this.activities[currentYear][currentMonth])
				this.activities[currentYear][currentMonth] = {}

			if(!this.activities[currentYear][currentMonth][currentDay]) {
				this.activities[currentYear][currentMonth][currentDay] = this.description;

				localStorage.setItem('chainerActivities', JSON.stringify(this.activities));
				this.trackedToday = true;
			}
		}
	}
});
