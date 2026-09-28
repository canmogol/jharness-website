$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";


	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */

