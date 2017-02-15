// Vue library
import Vue from 'vue';

// Vue lifecycle hooks
import createdHook from './vue-hooks/created';

// Vue initial data
import initialData from './vue-initial-data';

// Vue computed properties
import today from './vue-computed/today';
import allDaysOfTheMonth from './vue-computed/all-days-of-the-month';
import modalEl from './vue-computed/modal-el';
import appViewEl from './vue-computed/app-view-el';

// Vue methods
import trackToday from './vue-methods/track-today';
import viewDay from './vue-methods/view-day';
import viewApp from './vue-methods/view-app';


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
