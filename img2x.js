/**
 * img2x v1.00
 * img2x is a jQuery plugin designed to replace
 * standard resolution images with their @2x
 * counterpart.
 */
(function($) {
	$.fn.img2x = function(settingsOptions) {

		var settings = {},
			settingsDefault = {
				className: 'img2x',
				fileTypes: ['.png', '.gif', '.jpg']
			};
		
		settings = jQuery.extend(settings, settingsDefault, settingsOptions);

		var elements = this.filter('.' + settings.className),
			is2x = false;

		if (elements.css('font-size') == '1px') {
			is2x = true;
		}

		return (
			elements.each(function(index) {
				
				if (is2x) {
					var img = $(this),
						src = img.attr('src'),
						re = new RegExp('(' + settings.fileTypes.join('|') + ')', 'ig');

					src = src.replace(re, '@2x$1');

					img.attr('src', src);
				}
				
			})
		);

	};
})(jQuery);