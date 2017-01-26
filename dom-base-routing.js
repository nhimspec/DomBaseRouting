
/* ========================================================================
 * BASE WORDPRESS
 * USE FOR MULTI PAGE
 * ROOTS PROPERTIES IS <body> CLASS NAME
 * ======================================================================== */

(function($) {

	var Roots = {
	  	// All pages
	  	common: {
		    init: function() {
		      	// JavaScript to be fired on all pages
		    }
	  	},
	  	// Home page
		home: {
		    init: function() {
		      	// JavaScript to be fired on home page
		    }
	  	},
		// About page
		about: {
			init: function() {
		  		// JavaScript to be fired on the about us page
			}
		}
	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
	var UTIL = {
	  	fire: function(func, funcname, args) {
			var namespace = Roots;
			funcname = (funcname === undefined) ? 'init' : funcname;
			if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
			  	namespace[func][funcname](args);
			}
		},
		loadEvents: function() {
			UTIL.fire('common');

			$.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
			  	UTIL.fire(classnm);
			});
		}
	};

	$(document).ready(UTIL.loadEvents);

})(jQuery); 