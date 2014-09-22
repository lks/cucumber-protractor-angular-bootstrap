// features/step_definitions/myStepDefinitions.js

var myStepDefinitionsWrapper = function () {

	this.Given('I am a newbie', function(callback) {
		callback();
	});

	this.When('I display the app', function(callback) {
		callback.pending();
	});

	this.Then('I should see "Hello World"', function(title, callback) {
		callback.pending();
	});
};

module.exports = myStepDefinitionsWrapper;