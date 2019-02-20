(function () {
	angular
		.module('omdbApp', [])
		.controller('omdbController', omdbController);
		
		function omdbController($http) {
			var model = this;
			//model.hello = 'hello from MCU';
			model.searchByTitle = searchByTitle;
			
			function searchByTitle(title){
				var url = "http://omdbapi.com/?apikey=89c27ce2&s=" + title;
				$http.get(url)
					.then(renderMovies);
			}
			
			function renderMovies(response){
				model.movies = response.data.Search;
				
			}
		}
})();