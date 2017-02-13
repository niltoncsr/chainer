export default function(day) {

	this.modalEl.classList.add('active');
	this.appViewEl.classList.add('blurred');

	this.modalEl.innerText = day.activity;

	this.unclickableEls.forEach(function(el) {
		el.classList.add('untrackable');
	});
};
