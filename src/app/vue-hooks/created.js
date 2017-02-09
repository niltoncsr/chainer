export default function() {
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
}
