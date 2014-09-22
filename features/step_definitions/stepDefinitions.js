// features/step_definitions/myStepDefinitions.js

var myStepDefinitionsWrapper = function () {

	this.Given('I am a newbie', function(callback) {
		callback();
	});

	this.When('I display the app', function(callback) {
		browser.get('http://yoogaa.dev/app/index.html');
		callback();
	});

	this.Then('I should see "Hello World"', function(callback) {
		callback();
	});
};

module.exports = myStepDefinitionsWrapper;