// Vue library
import Vue from 'vue';

// Vue lifecycle hooks
import createdHook from './vue-hooks/created.js';

// Vue initial data
import initialData from './vue-initial-data.js';

// Vue computed properties
import today from './vue-computed/today.js';
import allDaysOfTheMonth from './vue-computed/all-days-of-the-month.js';

// Vue methods
import trackToday from './vue-methods/track-today.js';


new Vue({
	el: '#app-wrapper',
	data: initialData,

	created: createdHook,

	computed: {
		today: today,
		allDaysOfTheMonth: allDaysOfTheMonth,
	},

	methods: {
		trackToday: trackToday
	}
});
