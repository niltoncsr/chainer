var Vue = require('../vendors/vue/dist/vue.js');

new Vue({
	el: '#app',
	data: {
		d26012017: {
			work: 'I created a GitHub repo with very useful code snippets used internally'
		}
	},

	computed: {
		days: function() {
			var daysList = [];
			if(this.d26012017) {
				daysList.push(this.d26012017)
			}
			return daysList;
		}
	}
});
