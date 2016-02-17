var config = {};
config.gulp = require('gulp');

/* === gulp plugin === */
config.jshint = require('gulp-jshint');
config.uglify = require('gulp-uglify');
config.minify = require('gulp-minify-css');
config.imagemin = require('gulp-imagemin');
config.concat = require('gulp-concat');

/* === gulp system === */
config.minimist = require('minimist');
config.lazypipe = require('lazypipe');
config.gulpif = require('gulp-if');
config.ifelse = require('gulp-if-else');
config.notify = require('gulp-notify');
config.gutil = require('gulp-util');
config.clean = require('gulp-clean');

/* === gulp setting === */
var option = config.minimist(process.argv);
config.options = {};
config.options.myTask = option.x || option.task || 'noCmd';
config.options.myComd = option.c || option.comd || 'Gulp.noCmd()';
config.options.myType = option.t || option.type || 'js';
config.options.myName = option.n || option.name || 'test';
config.options.myRoot = option.root || '../..';
config.options.myDirt = option.dirt || 'htdocs/_MYXAMPP';
config.options.myWork = option.work || '_test';
config.options.myFile = option.file || 'testJS';
config.options.myExtn = option.extn || '*.js';

/* === gulp path === */
var confOpt = config.options;
var source = confOpt.myRoot + '/' + confOpt.myDirt + '/' + confOpt.myWork + '/' + confOpt.myFile + '/' + confOpt.myExtn;
var destination = confOpt.myRoot + '/' + confOpt.myDirt + '/' + confOpt.myWork + '/' + confOpt.myFile + '/' + confOpt.myExtn;
config.options.src = option.src || source;
config.options.dest = option.dest || destination;

/* === gulp task === */
config.noCmd = function(){ return config.gutil.log('WARNING! No any Command.') };
config.jshint = function(){
	return config.jshint()
};
config.jsFormat = function(){ return config.notify('js format') };
config.jsMinify = function(){ return config.notify('js minify') };
config.Concat = function(){ return config.notify('concat') };
config.Other = function(){ return config.notify('other') };

/* === gulp pipe === */
config.dev = config.lazypipe().pipe(config.jshint).pipe(config.jsFormat);
config.build = config.lazypipe().pipe(config.dev).pipe(config.jsMinify);
config.prod = config.lazypipe().pipe(config.build).pipe(config.Concat).pipe(config.Other);

module.exports = config;
