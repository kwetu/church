angular.module('app.controllers', [])
  
.controller('SERIESCtrl', function($scope, SeriesService) {
	"use strict";
	SeriesService.getSeries().then(function(series){
		$scope.church = series.data;
	});
})
   
.controller('EVENTSCtrl', function($scope) {

})
   
.controller('BIBLECtrl', function($scope,BibleService) {
	
})
   
.controller('MORECtrl', function($scope) {

})
      
.controller('episodesInSeriesCtrl', function($scope,$stateParams, SeriesService) {
	"use strict";
	SeriesService.getEpisodes($stateParams.id).then(function(episodes){
		$scope.series = episodes.data;
	});
	SeriesService.getSeries($stateParams.id).then(function(res){
		for(var i = 0; i < res.data.length; i++){
			if(i == $stateParams.id - 1){
				$scope.epBanner = res.data[i].SERIES_BANNER;	
			}
		}
	});
})
   
.controller('episodeDetailsCtrl', function($scope, $stateParams, $cordovaSocialSharing, SeriesService) {
	"use strict";
	SeriesService.getEpisodeDetails($stateParams.id).then(function(res){
		for(var i = 0; i < res.data.length; i++){
			if($stateParams.id < 43){
				$scope.epVideo = res.data[i].EPISODE_VIDEO;	
				$scope.epTitle = res.data[i].EPISODE_TITLE;	
				$scope.epStartDate = res.data[i].EPISODE_START_DATE;	
				$scope.epEndDate = res.data[i].EPISODE_END_DATE;
				$scope.epPastor = res.data[i].EPISODE_PASTOR;	
				$scope.epWeek = res.data[i].EPISODE_WEEK;	
				$scope.epAudio = res.data[i].EPISODE_AUDIO;
				$scope.epDesc = res.data[i].EPISODE_DESCRIPTION;
				$scope.shareAll = function() {
					$cordovaSocialSharing
					.share(res.data[i].EPISODE_DESCRIPTION, res.data[i].EPISODE_TITLE, res.data[i].EPISODE_IMAGE, res.data[i].EPISODE_WEBPAGE) ;
				};
				if(res.data[i].id == $stateParams.id){ break; }
			}
		}
	});
})
   
.controller('monthEventsCtrl', function($scope, $stateParams, EventService) {
	"use strict";
	EventService.getMonths($stateParams.id).then(function(details){
		$scope.month = details.data;
	});
	EventService.getMonths($stateParams.id).then(function(res){
		for(var i = 0; i < res.data.length; i++){
			if($stateParams.id == res.data[i].id){
				$scope.evBanner = res.data[i].EVENT_BANNER;
			}
		}	
	});
	
})
   
.controller('eventDetailsCtrl', function($scope, $stateParams, $cordovaCalendar, $rootScope, $cordovaSocialSharing, EventService) {
	"use strict";
	var sParts = ""; var eParts = "";
	EventService.getMonths($stateParams.id).then(function(res){
		for(var i = 0; i < res.data.length; i++){
			if($stateParams.id < 73){
				$scope.evImageUrl = res.data[i].EVENT_IMAGE;	
				$scope.evMapImageUrl = res.data[i].EVENT_MAP_IMAGE;	
				$scope.evDateTime = res.data[i].EVENT_DATE_TIME;	
				$scope.evLocation = res.data[i].EVENT_LOCATION;	
				$scope.evNotes = res.data[i].EVENT_NOTES;	
				$scope.evDesc = res.data[i].EVENT_DESCRIPTION;
				$scope.evWebsite = res.data[i].EVENT_URL;
				$scope.shareAll = function() {
					$cordovaSocialSharing
					.share(res.data[i].EVENT_DESCRIPTION, res.data[i].EVENT_TITLE, res.data[i].EVENT_IMAGE, res.data[i].EVENT_URL) ;
				};
				$scope.sendEmail = function() {
					$cordovaSocialSharing
					.shareViaEmail(res.data[i].EVENT_DESCRIPTION, res.data[i].EVENT_TITLE, ['info@urbanlife.org.za', res.data[i].EVENT_EMAIL], null, res.data[i].EVENT_IMAGE, 
						"Your message has been sent :)", "Something went wrong, please try again later") ;
				};
				$scope.makeCall = function () {
					var call = "tel:+" + res.data[i].EVENT_PHONE;
					alert('Calling ' + call );
					document.location.href = call;
				};
				sParts = res.data[i].EVENT_START_DATE.split(',');
				eParts = res.data[i].EVENT_END_DATE.split(',');
				$scope.addEvent = function(){
					$cordovaCalendar.createEvent({
					  title: res.data[i].EVENT_TITLE,
					  location: res.data[i].EVENT_LOCATION,
					  notes: res.data[i].EVENT_NOTES,
					  startDate: new Date(sParts[0], parseInt(sParts[1])-1, sParts[2], sParts[3], sParts[4], sParts[5], sParts[6]),
					  endDate: new Date(eParts[0], parseInt(eParts[1])-1, eParts[2], eParts[3], eParts[4], eParts[5], eParts[6])
					}).then(function () {
						alert("Thank you for adding "+res.data[i].EVENT_TITLE+" to your calendar!");
					}, function (err) {
					  alert("Some's wrong! "+err);
					});
				  };
				if(res.data[i].id == $stateParams.id){ break; }
			}
		}
	});
})
   
.controller('mapCtrl', function($scope, $stateParams, $rootScope, EventService) {
	"use strict";
		$scope.initialize = function() {
			var myLatlng = new google.maps.LatLng(-31.263527, 23.598633); //Change to church map coordinates
			var mapOptions = { center: myLatlng, zoom: 5, mapTypeId: google.maps.MapTypeId.ROADMAP };
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			var marker = new google.maps.Marker({ position: myLatlng, map: map, title: 'South Africa' });
			google.maps.event.addListener(marker, 'click', function() { infowindow.open(map,marker); });
			$scope.map = map;
	  	};

})

.controller('webpageCtrl', function($scope, $sce, WebpageService) {
	WebpageService.getUrl().then(function(page){
		$scope.openBible = $sce.trustAsResourceUrl(page.data[0].CHURCH_BIBLE_PAGE);
	});
})

.controller('streamCtrl', function($scope, $sce, VideoStreamService) {
	VideoStreamService.getStream().then(function(stream){
		$scope.videoStream = $sce.trustAsResourceUrl(stream.data[0].CHURCH_VIDEO_STREAM_URL);
	});
})
   
.controller('readingPlanCtrl', function($scope,$stateParams, $cordovaSocialSharing, BibleService) {
	"use strict";
	BibleService.getPlan().then(function(plan){
		$scope.bible = plan.data;
	});
})
   
.controller('readingPlanDetailsCtrl', function($scope,$stateParams, BibleService) {
	"use strict";
	BibleService.getPlan($stateParams.id).then(function(details){
		for(var i = 0; i < details.data.length; i++){
			if(details.data[i].id == $stateParams.id){
				$scope.readBanner = details.data[i].READING_PLAN_IMAGE;
				$scope.readVerse = details.data[i].READING_PLAN_VERSE;
				$scope.readPlan = details.data[i].READING_PLAN.replace(/<\/?[^>]+>/g, '');
				$scope.readAudio = details.data[i].READING_PLAN_AUDIO;
			}
		}
	});
})
   
.controller('webpageMoreCtrl', function($scope, $sce, $stateParams, WebpageMoreService) {
	"use strict";
	 WebpageMoreService.getUrls($stateParams.id).then(function(page){
    		if($stateParams.id == 1){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_ABOUT_PAGE);
			}else
			if($stateParams.id == 2){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_SIGN_UP_PAGE);
			}else
			if($stateParams.id == 3){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_CAMPUSES_PAGE);
			}else
			if($stateParams.id == 4){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_MINISTRIES_PAGE);
			}else
			if($stateParams.id == 5){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_CONTACTS_PAGE);
			}else
			if($stateParams.id == 6){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_GIVING_PAGE);
			}else
			if($stateParams.id == 7){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_INSPIRATIONS_PAGE);
			}else
			if($stateParams.id == 8){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_HOME_PAGE);
			}else
			if($stateParams.id == 9){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_WALLPAPERS_PAGE);
			}else
			if($stateParams.id == 10){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_MORE_PAGE);
			}else
			if($stateParams.id == 11){
				$scope.visitUrl = $sce.trustAsResourceUrl(page.data[0].CHURCH_DEVELOPERS_PAGE);
			}

    });
})
   
.controller('pastorsCtrl', function($scope) {
	
})
   
.controller('announcementsCtrl', function($scope, $cordovaSocialSharing, NewsService) {
	"use strict";
	NewsService.getNews().then(function(res){
		$scope.announcements = res.data;
	});
})
   
.controller('announcementReadCtrl', function($scope, $stateParams, NewsService) {
	"use strict";
	NewsService.getNews($stateParams.id).then(function(res){
		for(var i = 0; i < res.data.length; i++){
			if(res.data[i].id == $stateParams.id){
				$scope.newsTitle = res.data[i].news_title;
				$scope.newsDay = res.data[i].news_day;
				$scope.newslongDesc = res.data[i].news_long_desc;
			}
		}
		
	});
});
 