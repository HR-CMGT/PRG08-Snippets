# Gulp
Als je meerdere taken wilt uitvoeren naast de tsc compiler, dan kan je werken met `gulp`. Global install: `sudo npm install gulp-cli -g`. 

Als je dit project hebt gecloned kan je met `npm install` alle benodigde modules installeren. Als je zelf een nieuw project begint kan je deze [instructies](https://www.npmjs.com/package/gulp-tsc) volgen.

Je kan nu je eigen [gulpfile](../gulpfile.js) maken waarin je alle compile taken kan plaatsen, zoals tsc, sass, uglify.

Let op dat je `node_modules` in [.gitignore](../.gitignore) plaatst, anders worden je node modules ook in je git repository geplaatst.

# Links
- [Gulp](http://gulpjs.com)
- [Gulp Typescript](https://www.npmjs.com/package/gulp-tsc)
- [VS Code Gulp](https://www.typescriptlang.org/docs/handbook/gulp.html)
- [VS Code Tasks](https://code.visualstudio.com/docs/editor/tasks)