var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '[data-app]',
	data: {
		activities: {},
		description: '',
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

		allDaysOfTheMonth: function() {
			var activitiesDays = [],
					activities = [];

			activitiesDays = Object.keys(this.activities[this.today.year][this.today.month]);

			// Current tracked days saved on localStorage
			activities = activitiesDays.map((day) => {
				var el = {
					tracked: true
				};

				el.day = Number(day);
				el.activity = this.activities[this.today.year][this.today.month][day].activity;

				return el;
			});

			// Check if there are any untracked day comparing the last with today
			if(activities[activities.length-1].day === this.today.day) {
				return activities;
			} else {

				let lastActivity = activities[activities.length-1].day;
				let daysWithoutTracking = this.today.day - lastActivity;
				for(let i = 1; i < daysWithoutTracking; i++) {
					activities.push({
						day: lastActivity + i,
						activity: null,
						tracked: false
					});
				};
				return activities;
			};
		}
	},

	methods: {
		// Track the present day in to the app and save it on localStorage
		trackToday: function() {

			if(!this.activities[this.today.year])
				this.activities[this.today.year] = {}

			if(!this.activities[this.today.year][this.today.month])
				this.activities[this.today.year][this.today.month] = {}

			if(!this.activities[this.today.year][this.today.month][this.today.day]) {
				this.activities[this.today.year][this.today.month][this.today.day] = {
					activity: this.description,
					tracked: true
				};

				localStorage.setItem('chainerActivities', JSON.stringify(this.activities));
				this.trackedToday = true;
			}
		}
	}
});
