cucumber-protractor-angular-bootstrap
=====================================

Bootstrap to work with the Behavior Driven Development.

Prerequisites
-------------

To run this app, you have to install:
- Local web server (Apache, Nginx, jetty, ...),
- Java 1.6.0 minimum (used for selenium server),
- NodeJS.

Install your project
--------------------

In your project directory, you have to get all dependencies defined in the package.json file:

    $ npm install

Now, you can access to your application:

    http://localhost/app/index.html

Launch BDD Test
---------------

To launch the BDD test, you have to launch the selenium server. To do that, we will launch the webdriver manager included in the dependencies of protractor:

    $ ./node_modules/protractor/bin/webdriver-manager start

In an other consol tab, we will launch the test with this commandd:

    $ ./node_modules/protractor/bin/protractor

How to config your project to do this
-------------------------------------

To be explained