if ('undefined' != typeof jQuery) {
	(function($, window) {
		var timeout_id, leading = true, o = $({});
		o.wait = 500;
		$(window).on('resize', function(){
			o.trigger('tick');
			if (leading) {
				leading = false;
				o.trigger('start');
			}
			else {
				clearTimeout(timeout_id);
				timeout_id = setTimeout(function(){
					o.trigger('finish');
					leading = true;
				}, o.wait);
			}
		});
		$.resizeagent = o;
	})(jQuery, window);
}
