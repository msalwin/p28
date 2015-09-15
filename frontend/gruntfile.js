module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //łączymy wszystkie pliki js w jeden
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
            'src/bower_components/jquery/dist/jquery.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-route/angular-route.js',
            'src/bower_components/angular-resource/angular-resource.js',
            'src/bower_components/angular-sanitize/angular-sanitize.js',
            'src/bower_components/angular-bootstrap/ui-bootstrap.js',
            'src/bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
            'src/bower_components/bootstrap/dist/js/bootstrap.js',
            'src/components/version/version.js',
            'src/components/version/version-directive.js',
            'src/components/version/interpolate-filter.js',
            'src/app.js',
            'src/views/conception/conception.js',
            'src/views/about/about.js',
            'src/views/news/news.js',
            'src/views/gallery_categ/gallery_categ.js',
            'src/views/gallery_list/gallery_list.js',
            'src/views/gallery_details/gallery_details.js',
            'src/factory/NewsFactory.js',
            'src/factory/GalleryFactory.js',
            'src/filters/filters.js'
             ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    
    // minimalizujemy pliki js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
        // plik aplikacji
        build_app_js: {
            src: [
                'dist/p28app.js'
            ],
            dest: 'dist/<%= pkg.name %>.min.js'
        },
        
        // oddzielnie plik lightbox'a, który musi byc dołączany na końcu pliku index.html
        build_lightbox_js: {
            src: [
                'src/bower_components/lightbox2/src/js/lightbox.js'
            ],
            dest: 'dist/bower_components/lightbox2/src/js/lightbox.min.js'
        }
    },
    
    // nie używam jeszcze tego modułu
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    
    // minimalizacja plików CSS, oddzielnie plik aplikacji i lightboxa,  uwagi na ściezki do obrazków w lightbox.css
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['app.css'],
          dest: 'dist/css',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'src',
          src: ['bower_components/lightbox2/src/css/lightbox.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }    
        ]
      }
    },  

    // kopiowanie plików aplikacji do folderu, w którym będzie aplikacja "produkcyjna"
    copy: {
      main: {
        files: [
            //widoki html
            {expand: true, cwd: 'src', src: ['views/**/*.html'], dest: 'build'},

            //pliki html w głównym folderze (index.html)
            {expand: true, cwd: 'src', src: ['*.html'], dest: 'build'},

            // obrazki 
            {expand: true, cwd: 'src', src: ['img/**'], dest: 'build'},

            // komponenty lightboxa
            {expand: true, cwd: 'src', src: ['bower_components/lightbox2/src/images/**'], dest: 'build'},
            {expand: true, cwd: 'dist/css', src: ['bower_components/lightbox2/src/css/**'], dest: 'build'},
            {expand: true, cwd: 'dist', src: ['bower_components/lightbox2/src/js/lightbox.min.js'], dest: 'build'},

            // js aplikacji            
            {expand: true, cwd: 'dist', src: ['<%= pkg.name %>.min.js'], dest: 'build'},

            // css aplikacji            
            {expand: true, cwd: 'dist', src: ['styles.css'], dest: 'build'}
        ],
      },
    },

    // usunięcie folderów 
    clean: ["dist", "build"],

    // złączenie plików css w jeden plik, css lightboxa oddzielnie
    concat_css: {
        options: {},
        all: {
          src: ["dist/css/**/*.css"],
          dest: "dist/styles.css"
        },
      },
    
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', [ 'clean', 'concat', 'uglify', 'cssmin', 'concat_css', 'copy']);

};