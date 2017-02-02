var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '#app',
	data: {
		activities: {},
		trackedToday: false
	},


	created: function() {
		if(!localStorage.chainerActivities)
			localStorage.setItem('chainerActivities', {})
	},


	methods: {
		trackToday: function() {
			var today = new Date(),
					currentYear = today.getFullYear(),
					currentMonth = today.getMonth(),
					currentDay = today.getDate(),

			if(!this.activities[currentYear]) {
				this.activities[currentYear] = {};
			}

			if(!this.activities[currentYear][currentMonth])
				this.activities[currentYear][currentMonth] = {}

			if(!this.activities[currentYear][currentMonth][currentDay]) {
				this.activities[currentYear][currentMonth][currentDay] = this.description;
				this.trackedToday = true;
			}
		}
	}
});
