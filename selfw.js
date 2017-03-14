(function($){
 	$.fn.extend({  		
	    //pass the options variable to the function
		selfw: function(options) {
			var defaults = {
					text: $(this).text(),
					time: 100,
					random: true
				};
			var options =  $.extend(defaults, options);
			var that = $(this);

			function init(){
				that.each(function(){
					element = $(this);
					element.empty();
					timeout(options.text, 0, element);										    
	   	    	});
			}

			function timeout(word, index, $this ){
				var count = word.length -1,
					time;
				
				if(options.random === true)
					time = Math.floor(Math.random() * options.time);
				else
					time = options.time;

				console.log(time);
				
				
				if(index <= count){
					setTimeout(function(){						
						$this.append(word[index]);
						timeout(word, index+1, $this);
					 }, time);					
				}


			}

			init(); //kick off the goodness
   	    }
	});
	
})(jQuery);