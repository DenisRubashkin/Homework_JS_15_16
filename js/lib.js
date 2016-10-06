'use strict';

$(function() {
  
  $('#search').on('click', function(e) {
    
    e.preventDefault();
    var searchString = $('#search-string').val();
  
    if (searchString) {
      searchString = encodeURIComponent(searchString);
      var xhttp = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.datamarket.azure.com/Bing/Search/Web?Query=%27' + searchString + '%27&$top=20&$format=json',
        
        headers: {
            Authorization:'Basic ' + btoa(':kSvQUdyQ6VTKaq46VuHl1ly3+h9xo9qd0dhesMoalR4=')
          },
        
        complete: function(jqXHR) {
          var tmpl = _.template($('#tmpl')[0].innerHTML)
          var results = tmpl({foundItems: jqXHR.responseJSON.d.results});
          $('.search-results').remove();
          $('.wrapper').append(results);
        }
      });
    }  
  
  });

  function sandbox() {

    function Human() {
      this.name = 'John';
      this.age = 32;
      this.gender = 'M';
      this.height = 182;
      this.weight = 85;
    };
  
    function Worker() {
      this.workplace = 'Horns&Hooves';
      this.salary = 1285;
    };

    function Student() {
      this.almaMater = 'Vanity academy';
      this.stipend = 1285;
    };

    Worker.prototype = new Human();

    Student.prototype = new Human();
    
    Worker.prototype.doWorking = function() {
        console.log('Do not disturb! I`m busy.');
      };

    Student.prototype.doWatchSeries = function() {
        console.log('I like it!');
      };

    var worker = new Worker();
    var student = new Student();

    console.log('worker.name:', worker.name);
    console.log('student.gender:', student.gender);

    student.doWatchSeries();
    worker.doWorking();
  }

  sandbox();
});
