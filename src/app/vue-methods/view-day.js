export default function(day) {

	this.modalEl.classList.add('active');
	this.appViewEl.classList.add('blurred');

	if(day.activity)
		this.modalEl.innerText = day.activity;
	else
		this.modalEl.innerHTML = '<em>Seems like you don\'t wanna talk about it.</em>';

	this.showingActivity.isActive = true;
};
