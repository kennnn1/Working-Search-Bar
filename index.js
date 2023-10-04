$(document).ready(function(){
    $.fn.search = (query) => {
        var url = "https://www.google.com/search?client=firefox-b-d&q=";
        window.open(url + query);
    }

    $(".search-btn").click(function(){
      var query = $(".search-bar").val();

      if (query != "") {
        $.fn.search(query);
      } else {
        console.log(0);
      }
    });
  });