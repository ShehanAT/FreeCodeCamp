$(document).ready(function(){
  function wikiViewer(){
	  $.ajax({
		  url:"https://en.wikipedia.org/w/api.php?action=opensearch&search=Albert Einstein&limit=400&format=json&callback="
		, dataType:"jsonp"
		, success: function(response){
			console.log(response.search);
		
		}
	  })
  };
	wikiViewer();
});
