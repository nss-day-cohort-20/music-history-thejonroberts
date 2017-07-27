module.exports = function(grunt) {

	grunt.initConfig({
		// Change the b-fy task to add a transform task
		browserify: {
			js: {
					src: ['../javascripts/songs.js'],
					dest: '../dist/app.js'
			},
			options: {
					transform: ['hbsfy'],
					browserifyOptions: {
					paths: [
						"./node_modules"
						]
					}
			}
		},
		jshint: {
			options: {
				predef: [ "document", "console"],
				esnext: true,
				globalstrict: true,
				globals: {},
				browserify: true
			},
			files: ['../javascripts/**/*.js']
		},
		sass: {
			dist: {
				files: {
					'../css/style.css': '../sass/main.sass'
				}
			}
		},
		watch: {
			javascripts: {
				files: ['../javascripts/**/*.js'],
				tasks: ['jshint', 'browserify']
			},
			sass: {
				files: ['../sass/**/*.sass'],
				tasks: ['sass']
			},
			hbs: {
				files: ['../templates/**/*.hbs'],
				tasks: ['browserify']
			}
		}
	});

	require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
