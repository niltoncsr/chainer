// Track the present day in to the app and save it on localStorage
export default function() {
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
