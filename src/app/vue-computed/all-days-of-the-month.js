export default function() {
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
