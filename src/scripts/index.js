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
		today: function() {
			var currentDay = (new Date());
			return {
				day: currentDay.getDate(),
				month: currentDay.getMonth() + 1,
				year: currentDay.getFullYear()
			}
		},

		trackedDaysOfTheMonth: function() {
			var appActivities = this.activities,
					activitiesDays = [], activities = [];

			activitiesDays = Object.keys(appActivities[this.today.year][this.today.month]);
			activitiesAndComment = activitiesDays.map((day) => {
				var el = {};

				el[day] = appActivities[this.today.year][this.today.month][day];

				return el
			});

			return activitiesAndComment;
		},
	},

	methods: {
		// Track the present day in to the app and save it on localStorage
		trackToday: function() {

			if(!this.activities[this.today.year]) {
				this.activities[this.today.year] = {};
			}

			if(!this.activities[this.today.year][this.today.month])
				this.activities[this.today.year][this.today.month] = {}

			if(!this.activities[this.today.year][this.today.month][this.today.day]) {
				this.activities[this.today.year][this.today.month][this.today.day] = this.description;

				localStorage.setItem('chainerActivities', JSON.stringify(this.activities));
				this.trackedToday = true;
			}
		}
	}
});
