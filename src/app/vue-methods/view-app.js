export default function() {

	this.modalEl.classList.remove('active');
	this.appViewEl.classList.remove('blurred');

	this.unclickableEls.forEach(function(el) {
			el.classList.remove('untrackable');
	});
};
