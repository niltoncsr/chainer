require('../styles/styles.styl');

// Vue library
import Vue from 'vue';

// Vue lifecycle hooks
import createdHook from './vue-hooks/created.js';

// Vue initial data
import initialData from './vue-initial-data.js';

// Vue computed properties
import today from './vue-computed/today.js';
import allDaysOfTheMonth from './vue-computed/all-days-of-the-month.js';
import modalEl from './vue-computed/modal-el.js';
import appViewEl from './vue-computed/app-view-el.js';

// Vue methods
import trackToday from './vue-methods/track-today.js';
import viewDay from './vue-methods/view-day.js';
import viewApp from './vue-methods/view-app.js';


new Vue({
	el: '#app-wrapper',
	data: initialData,

	created: createdHook,

	computed: {
		today: today,
		allDaysOfTheMonth: allDaysOfTheMonth,
		modalEl: modalEl,
		appViewEl: appViewEl,
	},

	methods: {
		trackToday: trackToday,
		viewDay: viewDay,
		viewApp: viewApp,
	}
});
