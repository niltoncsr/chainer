export default function() {

	this.modalEl.classList.remove('active');
	this.appViewEl.classList.remove('blurred');

	this.showingActivity.isActive = false;
};
