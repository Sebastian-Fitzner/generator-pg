var libassId = 'sassInsteadOfCompass';
var devFolderId = 'createDevFolder';
var docsId = 'installDocs';

exports.questions = function () {
	return {
		name: 'features',
		type: 'checkbox',
		message: 'Do you need anything special?',
		choices: [
			{
				name: 'Node-Sass instead of Ruby Sass',
				value: libassId,
				checked: true
			},
			{
				name: 'Dev-Output & Dist-Output?',
				value: devFolderId,
				checked: true
			},
			{
				name: 'Create Developer Documentation',
				value: docsId,
				checked: false
			}
		],
		default: this.config.get('features')
	};
};

exports.setup = function () {
	this.features = this.config.get('features') || [];
};

exports.scaffold = function () {

	// TODO: Clean up and merge

	if (this.features.indexOf(docsId) != -1 || this.gruntModules.indexOf('grunt-jsdoc') || this.gulpModules.indexOf('gulp-jsdoc')) {
		this.copy('helpers/task-configs/jsdoc.conf.json');
		this.copy('resources/js/README.md');
	}
	if (this.features.indexOf(docsId) != -1) {
		this.directory('resources/scss/docs', 'resources/scss/docs');
		this.copy('resources/scss/docs.scss', 'resources/scss/docs.scss');
		if (this.templateEngine !== '') {
			this.template('resources/templating/docs/index.hbs.ejs', 'resources/templating/docs/index.hbs');
		}
	}

	if (this.gruntModules.indexOf('grunt-jsdoc') != -1 || (this.features.indexOf('installDocs') != -1)) {
		this.copy('helpers/_grunt/jsdoc.js');
	}
	// Add Dev Folder
	if (this.features.indexOf(devFolderId) != -1) {
		this.mkdir('_dist');
	}

	if (this.features.indexOf(docsId) == -1) delete this.bowerFile['dependencies']['highlightjs'];

	// Grunt & Gulp
	if (this.taskRunner.indexOf('grunt') !== -1) {

		// Add Libsass
		if (this.features.indexOf('sassInsteadOfCompass') != -1) {
			this.template('helpers/_grunt/_sass.js.ejs', 'helpers/_grunt/sass.js');
			this.template('helpers/_grunt/_sassGlobber.js.ejs', 'helpers/_grunt/sassGlobber.js');
		} else {
			this.copy('helpers/_grunt/bgShell.js', 'helpers/_grunt/bgShell.js');
			this.copy('config.rb', 'config.rb');
		}

		// Add copy task
		if (this.taskRunner.indexOf('grunt') !== -1 && (this.features.indexOf('createDevFolder') != -1 || this.features.indexOf('installDocs') != -1)) {
			this.copy('helpers/_grunt/_copy.js.ejs', 'helpers/_grunt/copy.js');
		}

	} else {
		if (this.taskRunner.indexOf('gulp') == -1) {
			this.copy('helpers/_grunt/bgShell.js', 'helpers/_grunt/bgShell.js');
		}
		this.copy('config.rb', 'config.rb');
	}
};