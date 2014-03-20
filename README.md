# Prototype Generator

[![NPM](https://nodei.co/npm/generator-prototype.png?downloads=true&stars=true)](https://nodei.co/npm/generator-prototype/)



> [Yeoman][yeoman] generator for Prototype.

## Getting started
- Install Yeoman:
    `npm install -g yo`

- Install the package via:
    `npm install -g generator-prototype`

- Or copy the repository via clone to your directory (it depends on the system, just find your directory with yo installed):
    `git clone https://github.com/Prototype-Group/generator-prototype.git 
	~/AppData/Roaming/npm/node_modules`
 
## Usage

### Prototype app scaffolds.

```bash
mkdir project && cd project
yo prototype [--skip-install]
```

#### Options

* `-s` alias `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `-w` alias `--skip-welcome-message`

  Skips app welcome message.

## Default Installation
You can scaffold your project in an instance. The first question is: 
"Choose your installation route:"
If you choose "Standard installation" you skip the rest of the questions and get the default values. 

## Plugins and Modules
You can apply multiple addons and grunt modules to your project. Just choose specific ones:
 
### Assemble

 * permalinks
 * assemble-contrib-contextual
 * assemble-contrib-sitemap
 * assemble-related-pages
 * assemble-markdown
 
### Grunt modules

 * [grunt-devtools](https://github.com/vladikoff/grunt-devtools) - An user interface in chrome to execute grunt tasks in your project
 * [grunt-sass](https://github.com/sindresorhus/grunt-sass) - You want to use Libsass instead of Compass to render your stylesheets 10 times faster? Here you go!
 * [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) - Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
 * [grunticon](https://github.com/filamentgroup/grunticon) - Generate SVG-URI-SASS files with png fallbacks
 * [dr-grunt-svg-sprites](https://github.com/drdk/dr-grunt-svg-sprites) - Generate SVG Sprites with css files
 * [grunt-packager](https://github.com/bobbor/grunt-packager) (only executable when your project.jspackcfg is configured) - package your js
 * [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
 * [grunt-browser-sync](https://npmjs.org/package/grunt-browser-sync) - Sync and auto-reload your local server over multiple devices
 * [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint) - Check your html for errors
 * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Check your js for errors
 * [grunt-jsbeautifier](https://github.com/vkadam/grunt-jsbeautifier) - Format your js files.
 * [grunt-prettysass](https://github.com/brandonminch/grunt-prettysass) - Format your SASS-files
 * [grunt-photobox](https://github.com/stefanjudis/grunt-photobox) - Take snapshots from homepage
 * [grunt-bless](https://github.com/stefanjudis/grunt-bless) - Split your css after you reach size limit for ie9
 * [grunt-combine-media-queries](https://github.com/stefanjudis/grunt-combine-media-queries) - When you use mixins for media queries in your SASS files, you can combine your media queries with this module
 * [grunt-comment-media-queries](https://github.com/cruncher/grunt-comment-media-queries) - You begin your project with mobile first but need to support desktop styles in IE8? That's your module!
 * [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) - a preconfigured proxy for developing clientside API interfaces in your prototype, with CORS, Basic Authentication support and http methods

## Gruntfile
For our Gruntfile we use the grunt module [load-grunt-configs](https://github.com/creynders/load-grunt-configs/) to split the file up in multiple files. 
These files/tasks you can find in this directory:

 * helpers/_grunt

## JS Libraries and CSS Frameworks
You can choose JS Libraries like:

* jQuery
* BackboneJS
* RequireJS
* AngularJS

And you can also choose CSS Frameworks like:

* Foundation
* Bourbon Neat
* SASS Bootstrap

All files will be included and configured. Have fun!

## Sub Generators
To help you in your workflow, we integrated some sub generators for you: 
 
 * Create a Backbone Model: yo prototype:bm
 * Create a Backbone View: yo prototype:bv
 * Create a Backbone Collection: yo prototype:bc

Others will follow.
 
## CMS snippets (work in progress)
You can choose between multiple content management systems (Drupal, Typo3, Magnolia, CoreMedia). 
After choosing a system you will get HTML-snippets and a few new SCSS files, which you can use:
 
 * Drupal 7
 * TYPO3 6.2
 * Magnolia
 * CoreMedia

## Alternative

 * [grunt-init-assemble](https://github.com/assemble/grunt-init-assemble)
 * [generator-assemble](https://github.com/assemble/generator-assemble)

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[yeoman]: http://yeoman.io/

## TODO:
 * CMS Snippets