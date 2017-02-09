import Vue from 'vue';

new Vue({
	el: '[data-app]',
	data: {
		activities: {},
		description: '',
		todayIsTracked: false
	},


	created: function() {
		// Create key in localStorage or set the actual content to the app
		if(!localStorage.chainerActivities) {
			localStorage.setItem('chainerActivities', JSON.stringify({}));
		} else {
			this.activities = JSON.parse(localStorage.getItem('chainerActivities'));

			// Check if there are any untracked day comparing the last with today
			let activitiesDays = Object.keys(this.activities[this.today.year][this.today.month]),
					lastActivity = Number(activitiesDays[activitiesDays.length-1]);

			if(lastActivity === this.today.day) {
				this.todayIsTracked = true;
				return;
			} else {
				let daysWithoutTracking = this.today.day - lastActivity;

				for(let i = 1; i < daysWithoutTracking; i++) {
					this.activities[this.today.year][this.today.month][lastActivity + i] = {
						activity: null,
						tracked: false
					};
				};
			};
		};
	},

	computed: {
		today: function() {
			var currentDay = (new Date());
			return {
				day: currentDay.getDate(),
				month: currentDay.getMonth() + 1,
				year: currentDay.getFullYear()
			};
		},

		allDaysOfTheMonth: function() {
			var activitiesDays = [],
					activities = [];

			activitiesDays = Object.keys(this.activities[this.today.year][this.today.month]);

			// Current tracked days saved on localStorage
			activities = activitiesDays.map((day) => {
				var el = {
					tracked: this.activities[this.today.year][this.today.month][day].tracked
				};

				el.day = Number(day);
				el.activity = this.activities[this.today.year][this.today.month][day].activity;

				return el;
			});
			return activities;
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
				this.allDaysOfTheMonth.push({
					day: this.today.day,
					activity: this.description,
					tracked: true
				})
				this.todayIsTracked = true;
			}
		}
	}
});
