var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '[data-app]',
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

	computed: {
		trackedDaysOfTheMonth: function() {
			var currentYear = (new Date()).getFullYear(),
					currentMonth = (new Date()).getMonth() + 1,
					appActivities = this.activities;
					activitiesDays = [], activities = [];

			activitiesDays = Object.keys(appActivities[currentYear][currentMonth]);
			activitiesAndComment = activitiesDays.map(function(day) {
				var el = {};

				el[day] = appActivities[currentYear][currentMonth][day];

				return el
			});

			return activitiesAndComment;
		},
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
