(function($){
 	$.fn.extend({  		
	    //pass the options variable to the function
		selfw: function(options) {
			var defaults = {
					text: $(this).text(),					
					time: 100,
					random: true,
					fade: true
				};

			var options =  $.extend(defaults, options);
			var css = {
				opacity: 0,
    			transition: 'opacity 1s ease'
			};
			var that = $(this);


			// return false;

			function init(){
				that.each(function(){
					element = $(this);
					element.empty();
					timeout(options.text, 0, element);
					that.css
	   	    	});
			}

			function timeout(word, index, $this ){
				var count = word.length -1,
					time;
				
				//br: Verifica se random o time
				if(options.random === true)
					time = Math.floor(Math.random() * options.time);
				else
					time = options.time;
				
				
				if(index <= count){
					setTimeout(function(){
						// let html = "<i class = 'word-i'>"+ word[index] + "</i>";

						let html = $("<i style = 'display:none'>"+ word[index] + "</i>").appendTo($this);

						//Hide
						// html.hide();

						//show
						html.fadeIn("slow");

						timeout(word, index+1, $this);
					 }, time);					
				}


			}

			init(); //kick off the goodness
   	    }
	});
	
})(jQuery);