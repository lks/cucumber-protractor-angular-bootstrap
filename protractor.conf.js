exports.config = {
  allScriptsTimeout: 11000,
	seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'phantomjs',
		'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs'
  },

  baseUrl: 'http://yoogaa.dev/app/index.html',

  framework: 'cucumber',

	cucumberOpts: {
		require: "features/step_definitions/*.js",
		tags: "@dev",
		format: "pretty"
	}
};
