export default function() {
	var currentDay = (new Date());
	return {
		day: currentDay.getDate(),
		month: currentDay.getMonth() + 1,
		year: currentDay.getFullYear()
	};
}
