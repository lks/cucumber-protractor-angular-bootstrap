cucumber-protractor-angular-bootstrap
=====================================

Bootstrap to work with the Behavior Driven Development.

Prerequisites
-------------

To run this app, you have to install:
- Local web server (Apache, Nginx, jetty, ...),
- Java 1.6.0 minimum (used for selenium server),
- Grunt-cli,
- NodeJS.

Install your project
--------------------

In your project directory, you have to get all dependencies defined in the `package.json` and `bower.json` files:

    $ grunt auto_install

Now, you can access to your application:

    http://localhost/app/index.html


Launch Cucumber Test
---------------

To launch the Cucumber test, you have to run the selenium server. To do that, we will start the webdriver manager included in the dependencies of protractor:

    $ ./node_modules/protractor/bin/webdriver-manager start

In an other console tab, we will launch the test with this command:

    $ ./node_modules/protractor/bin/protractor

How to config your project to do this
-------------------------------------

The first step is to create a directory where you will locate the `features` files and the step definitions.
Now, we have to configure protractor to use Cucumber as Testing Framework via the `protractor.conf.js` file.
We define the location of the `specs`. In general case, Protractor use this term to define the source code to test.
In the Cucumber case, this is the feature file.

    specs: [
      'features/*.feature'
    ]

Protractor allows the usage of an other test framework and in our case, the Cucumber framework. We can specify it in the protractor config file:

    framework: 'cucumber'

We have to configure the cucumber options always in the protractor file:

    cucumberOpts: {
		require: "features/step_definitions/*.js",
		tags: "@dev",
		format: "pretty"
	}

The `require` option define the path to the step definitions.
The `tags` property is mandatory. Cucumber will run the test only if the associated scenarios are tagged.
The `format` property specifies the displayed format.

Moreover, we only use one type of browser, PhantomJS. We can define in the protractor file, the whole browser used for your test. You can configure it like this:

    capabilities: {
        'browserName': 'phantomjs',
		'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs'
    }

