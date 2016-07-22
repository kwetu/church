angular.module('app.services', [])

.factory('consUrl', function() {
  return "http://church.infoclanhub.com/includes/encode/index.php/?get=";//replace YOURDOMAIN with your actual domain
})

.factory('SeriesService', function($http, $stateParams, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getSeries: function(){
			var series = [];
			return $http.get(get_url+"series").then(function(response){
				series = response;
				return series;
			});
		},
		getEpisodes: function(id){
			var episodes = [];
			id = $stateParams.id;
			if(id == 1){
				return $http.get(get_url+"episode1").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id == 2){
				return $http.get(get_url+"episode2").then(function(response){
					episodes = response;
					return episodes;
				});
			}
			if(id == 3){
				return $http.get(get_url+"episode3").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id == 4){
				return $http.get(get_url+"episode4").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id == 5){
				return $http.get(get_url+"episode5").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id == 6){
				return $http.get(get_url+"episode6").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id == 7){
				return $http.get(get_url+"episode7").then(function(response){
					episodes = response;
					return episodes;
				});
			}
		},
		getEpisodeDetails: function(id){
			var episodes = [];
			id = $stateParams.id;
			if(id < 7){
				return $http.get(get_url+"episode1").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id < 13){
				return $http.get(get_url+"episode2").then(function(response){
					episodes = response;
					return episodes;
				});
			}
			if(id < 19){
				return $http.get(get_url+"episode3").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id < 25){
				return $http.get(get_url+"episode4").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id < 31){
				return $http.get(get_url+"episode5").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id < 37){
				return $http.get(get_url+"episode6").then(function(response){
					episodes = response;
					return episodes;
				});
			}else
			if(id < 43){
				return $http.get(get_url+"episode7").then(function(response){
					episodes = response;
					return episodes;
				});
			}
		},
	};
})

.factory('BibleService', function($http, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getPlan: function(){
			var plan = [];
			return $http.get(get_url+"plan").then(function(response){
				plan = response;
				return plan;
			});
		}
	};
})

.factory('EventService', function($http, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getMonths: function(id){
			var details = [];
			if(id < 7){
				return $http.get(get_url+"jan").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 13){
				return $http.get(get_url+"feb").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 19){
				return $http.get(get_url+"mar").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 25){
				return $http.get(get_url+"apr").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 31){
				return $http.get(get_url+"may").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 37){
				return $http.get(get_url+"jun").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 43){
				return $http.get(get_url+"jul").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 49){
				return $http.get(get_url+"aug").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 55){
				return $http.get(get_url+"sep").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 61){
				return $http.get(get_url+"oct").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 67){
				return $http.get(get_url+"nov").then(function(response){
					details = response;
					return details;
				});
			}else
			if(id < 73){
				return $http.get(get_url+"dec").then(function(response){
					details = response;
					return details;
				});
			}
		}
	};
})

.factory('NewsService', function($http, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getNews: function(){
			var news = [];
			return $http.get(get_url+"news").then(function(response){
				news = response;
				return news;
			});
		}
	};
})

.factory('WebpageMoreService', function($http, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getUrls: function(){
			var pages = [];
			return $http.get(get_url+"webpages").then(function(response){
				pages = response;
				return pages;
			});
		}
	};
})

.factory('VideoStreamService', function($http, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getStream: function(){
			var livestream = [];
			return $http.get(get_url+"webpages").then(function(response){
				livestream = response;
				return livestream;
			});
		}
	};
})

.factory('WebpageService', function($http, consUrl) {
	"use strict";
        var get_url = consUrl;
	return {
		getUrl: function(){
			var page = [];
			return $http.get(get_url+"webpages").then(function(response){
				page = response;
				return page;
			});
		}
	};
});
