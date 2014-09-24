/**
 * Created by joriscalabrese on 24/09/2014.
 */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		auto_install: {
			local: {},
			subdir: {
				options: {
					cwd: 'subdir',
					stdout: true,
					stderr: true,
					failOnError: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-auto-install');
};