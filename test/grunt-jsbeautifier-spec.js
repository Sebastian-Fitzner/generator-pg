/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var fs = require('fs');
var answers = require('../test_helpers/prompt-answer-factory')({
	"gruntModules":[
		"grunt-jsbeautifier"
	]
});

describe('grunt-jsbeautifier', function () {
	var helperPath = "helpers/";

	beforeEach(function (done) {
		helpers.run(path.join(__dirname, '../generators/app'))
			.inDir(path.join(__dirname, 'tmp'))
			.withOptions({
				'skip-install': true,
				'skip-welcome-message': true
			})
			.withPrompts(answers)
			.on('end', done);
	});

	it('adds references to package.json', function () {
		assert.fileContent('package.json', /grunt-jsbeautifier/);
	});

	it('creates helper files', function () {
		assert.file(helperPath + "_grunt/jsbeautifier.js");
	});

	it('creates cnfig file', function () {
		assert.file(helperPath + "task-configs/.jsbeautifierrc");
	});

	it('adds task to Gruntfile.js file', function () {
		assert.fileContent("Gruntfile.js", /\'jsbeautifier\'/);
	});

});