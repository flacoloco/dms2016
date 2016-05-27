(function () {
	myApp = {
		video: $("#video video")[0],

		initCarousel: function(){
			var mySwiper = new Swiper ('.swiper-container', {
		    	// Optional parameters
		    	loop: true,


		    	// Navigation arrows
		    	nextButton: '.swiper-button-next',
		    	prevButton: '.swiper-button-prev'
			});
		},

		playVideo: function(_url){
			$("#video").show();
			$("#video").addClass("visible");
			//var video = document.querySelector("#video video");
			myApp.video.src=_url;
			myApp.video.play();

		},
		onReady: function(){
			myApp.initCarousel();

			//profes
			$("section.profes").on("click", function(e){
				myApp.playVideo("static/videos/profes_beta.mp4");
			});
			$("#video .close").on("click", function(e){
				$("#video").hide();
				$("#video").removeClass="visible";
				myApp.video.pause();
			});
			//Nosaltres
			$('.thumb').on("click", function(e){
					myApp.playVideo("static/videos/" + $(this).data("video") + ".mp4");
			});

			//add background thumbs
			$(".thumb").each(function(i,item){
				var id = $(item).data("video");
				$(item).find(".picture").css("background-image","url(static/img/" + id + ".png)");
				$(item).find(".who").html(id);
			});

		}
	};

	$(document).on("ready", function(){
		myApp.onReady();
	});
}());
