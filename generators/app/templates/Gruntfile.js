/*
 * Generated on <%= (new Date).toISOString().split('T')[0] %>
 * <%= pkg.name %> v<%= pkg.version %>
 * <%= pkg.homepage %>
 *
 * Copyright (c) <%= (new Date).getFullYear() %> <%= pkg.author.name %>
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 * 4. When your project is a really huge one, you should consider to add broccoli.js to outsource some tasks (like scss compiling). 
 *
 */

module.exports = function(grunt) {
	
	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, { <% if (modules.indexOf('grunt-combine-media-queries') != -1) { %>
		cmq: 'grunt-combine-media-queries'<% if (modules.indexOf('grunt-grunticon') != -1 || modules.indexOf('grunt-dr-svg-sprites') != -1 || (modules.indexOf('grunt-comment-toggler') != -1)) { %>,<% } %><% } %><% if (modules.indexOf('grunt-grunticon') != -1 || modules.indexOf('grunt-dr-svg-sprites') != -1) { %>
		replace: 'grunt-text-replace'<% } %><% if (modules.indexOf('grunt-dr-svg-sprites') != -1) { %>,
		'svg-sprites': 'grunt-dr-svg-sprites'<% } %>
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	var options = {
	// Project settings
		config: {
			// in this directory you can find your grunt config tasks
			src: "helpers/_grunt/*.js"
		},
		// define your path structure
		paths: {
			// helpers folder with grunt tasks and styleguide templates, tests and photobox
			helper: 'helpers',
			// resources folder with working files
			src: 'resources',<% if (features && features.length > 0 && features.indexOf('createDevFolder') != -1) { %>
			// dist folder
			dist: '_dist', <% } %>
			// dev/working folder
			dev: '_output'
		},
	// define your ports for grunt-contrib-connect
		ports: {
			app: 3000,
			test: 3001,
			livereload: 35731
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */
	<% if(features && features.length > 0){ if(features.indexOf('sassInsteadOfCompass') != -1) { %>
	// SASS Task
	grunt.registerTask('watchCSS', [
		'fileindex', // Sass Globbing with Grunt (see: http://www.prototype-generator.com/getting-started/features.html)
		'sass:dist'
	]); <% } else { %>
	grunt.registerTask('cssDev', [
		'bgShell:devCompass'
	]);
	grunt.registerTask('watchCSS', [
		'bgShell:watchCompass'
	]);
	grunt.registerTask('cssProd', [
		'bgShell:prodCompass'
	]); <% }} else { %>
	grunt.registerTask('cssDev', [
		'bgShell:devCompass'
	]);
	grunt.registerTask('watchCSS', [
		'bgShell:watchCompass'
	]);
	grunt.registerTask('cssProd', [
		'bgShell:prodCompass'
	]); <% } %><% if (modules && modules.length > 0 && modules.indexOf('grunt-grunticon') != -1) { %>
	
	// Icons Task
	grunt.registerTask('icons', [<% if (modules.indexOf('grunt-svgmin') != -1) { %>
		'svgmin',<% } %>
		'grunticon',
		'clean:grunticon',
		'replace'
	]); <% } %><% if (modules && modules.length > 0 && modules.indexOf('grunt-dr-svg-sprites') != -1) { %>
	
	// Sprites Task
	grunt.registerTask('icons', [<% if (modules.indexOf('grunt-svgmin') != -1) { %>
		'svgmin',<% } %>
		'svg-sprites',
		'replace:spriteUrl',
		'replace:spriteCleaner'
	]); <% } %><% if ((modules && modules.length > 0 && modules.indexOf('grunt-packager') != -1 || modules.indexOf('grunt-contrib-requirejs') != -1) || jsLibs.indexOf('requirejs') != -1) { %>
	
	// JS Task
	grunt.registerTask('js', [<% if(modules.indexOf('grunt-packager') != -1) { %>
		'packager'<% } %><% if(modules.indexOf('grunt-contrib-requirejs') != -1 || jsLibs.indexOf('requirejs') != -1) { %>
		'requirejs:dev'<% } %>
	]); <% } %><% if (modules && modules.length > 0 && modules.indexOf('grunt-responsive-images') != -1) { %>
	
	// Picture Task (This task creates an additional JSON file with the path to your picture)
	grunt.registerTask('pictures', [
		'responsive_images',
		'fileindex:pictures'
	]); <% } %><% if (modules && modules.length > 0 && modules.indexOf('grunt-contrib-compass') != -1) { %>
	
	// Compass Task
	grunt.registerTask('css', [
		'compass:dist'
	]); <% } %><% if (modules && modules.length > 0 && modules.indexOf('grunt-photobox') != -1) { %>
	
	// Screenshot Tasks (Take screenshots from your environments)
	grunt.registerTask('photoLocal', [
		'photobox:local' // be sure grunt server is running
	]);
	grunt.registerTask('photoDev', [
		'photobox:dev'
	]);
	grunt.registerTask('photoProd', [
		'photobox:prod'
	]);	<% } %>
	
	// Sync JS Task
	grunt.registerTask('syncJS', [
		'sync:js'
	]);<% if(installAssemble != false){ %>
	
	// Build HTML Task
	grunt.registerTask('build-html', [
		'assemble'
	]);<% } %>
	
	// HTML Hint Task (Check your HTML)
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// JS Hint Task (Check you JS)
	grunt.registerTask('check-js', [
		'jshint'
	]);
	// Beautifier Task (Beautify your JS files)
	grunt.registerTask('beauty-files', [
		'jsbeautifier'
	]);<% if (modules && modules.length > 0) { if (modules.indexOf('grunt-csscomb') != -1) { %>
	
	// CSSComb Task (Beautify your SASS files)
	grunt.registerTask('beauty-scss', [
		'csscomb'
	]);<% }} %>

	/*
	 *	ADVANCED TASKS
	 */
	grunt.registerTask('server', [<% if (modules && modules.length > 0 && (modules.indexOf('grunt-packager') != -1 || modules.indexOf('grunt-contrib-requirejs') != -1) || jsLibs.indexOf('requirejs') != -1) {  %>
		'js',<% } %><% if(installAssemble != false){ %>
		'newer:assemble',<% } %>
		'concurrent:syncing',
		'watchCSS'<% if (features && features.length > 0 && features.indexOf('installDocs') != -1 && features.indexOf('sassInsteadOfCompass') != -1) { %>,
		'sass:docs'<% } %><% if(modules && modules.length >= 0){ if(modules.indexOf('grunt-browser-sync') == -1) { %>,
		'connect:livereload',<% }} if(modules && modules.length > 0){ %><% if(typeof modules === 'object'){ _.each(modules, function(name, i) { if(name == 'grunt-browser-sync') { %>,
		// 'connect:livereload',
		'browserSync', <% } %><%}); %><%} %><%} %>
		'watch'
	]);<% if(modules && modules.length > 0 && modules.indexOf('grunt-connect-proxy') !== -1 && proxyHost && proxyPort) { %>
	
	grunt.registerTask('devProxy', [
		'configureProxies:proxy', 
		'connect:proxy',
		'watch:proxies'
	]);<% } %>
	
	grunt.registerTask('build', [
		'clean:dev',
		'jsbeautifier',<% if (modules && modules.length > 0) { if (modules.indexOf('grunt-modernizr') != -1) { %>
		'modernizr',<% }} %><% if (modules && modules.length > 0 && modules.indexOf('grunt-contrib-requirejs') != -1 || jsLibs.indexOf('requirejs') != -1) { %>
		'requirejs:prod',<% } %><% if (modules && modules.length > 0) { if (modules.indexOf('grunt-packager') != -1) { %>
		'packager',<% }} %><% if (modules && modules.length > 0) { if (modules.indexOf('grunt-contrib-uglify') != -1) { %>
		'uglify',<% }} %>
		'concurrent:syncing', <% if (modules && modules.length > 0) { if (modules.indexOf('grunt-csscomb') != -1) { %>
		'beauty-scss',<% }} %> <% if(features && features.length > 0){ if(features.indexOf('sassInsteadOfCompass') != -1) { %>
		'watchCSS',<% if (features && features.length > 0 && features.indexOf('supportIE8') != -1) { %>
		'sass:ie',<% } %><% } else { %>
		'cssProd',<% }} else { %>
		'cssProd',<% } %><% if (features && features.length > 0 && features.indexOf('installDocs') != -1 && features.indexOf('sassInsteadOfCompass') != -1) { %>
		'sass:docs',<% } %><% if (modules && modules.length > 0) { if (modules.indexOf('grunt-combine-media-queries') != -1) { %>
		'cmq',<% }} %><% if (modules && modules.length > 0) { if (modules.indexOf('grunt-data-separator') != -1) { %>
		'dataSeparator',<% }} %><% if(features && features.length > 0){ if(features.indexOf('mobileFirst') != -1) { %>
		'comment-media-queries:dist',<% }} %><% if (modules && modules.length > 0) { if (modules.indexOf('grunt-autoprefixer') != -1) { %>
		'autoprefixer',<% }} %>
		'cssmin',<% if (modules && modules.length > 0) { if (modules.indexOf('grunt-bless') != -1) { %>
		'bless',<% }} %>
		'concurrent:build',<% if (modules && modules.length > 0 && (modules.indexOf('grunt-comment-toggler') != -1 || modules.indexOf('grunt-contrib-requirejs') != -1)) { %>
		'toggleComments',<% } %>
		'check-js',
		'check-html'<% if (modules && modules.length > 0) { if (modules.indexOf('grunt-contrib.htmlmin') != -1) { %>, 
		'htmlmin'<% }} %>
	]);

	grunt.registerTask('default', [
		'server'
	]);
	
	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);<% if (features && features.length > 0 && features.indexOf('createDevFolder') != -1) { %>
	
	grunt.registerTask('dist', [
		'clean',<% if (modules && modules.length > 0) { if (modules.indexOf('grunt-version') != -1) { %>
		'version:prerelease',<% }} %>
		'build',
		'copy:dist'
	]); <% } %>
};