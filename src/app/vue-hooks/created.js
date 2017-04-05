export default function() {

	// If there's no item in localStorage, create
	if(!localStorage.chainerActivities) {
		localStorage.setItem('chainerActivities', JSON.stringify({}))
	}

	// Inject what had been stored into the app
	this.activities = JSON.parse(localStorage.getItem('chainerActivities'));

	// If there's no entry for the current year, create it
	if(!this.activities[this.today.year]) {
		this.activities[this.today.year] = {}
	}

	// If there's no entry for the current month, create it and the first day too
	if(!this.activities[this.today.year][this.today.month]) {
		this.activities[this.today.year][this.today.month] = {}
	}

	let activitiesDays =
		Object.keys(this.activities[this.today.year][this.today.month]).length + 1;

	if(activitiesDays !== this.today.day) {
		let daysWithoutTracking = this.today.day - activitiesDays;

		for(let i = 0; i < daysWithoutTracking; i++) {
			this.activities[this.today.year][this.today.month][activitiesDays + i] = {
				activity: null,
				tracked: false
			};
		}
	}
}
