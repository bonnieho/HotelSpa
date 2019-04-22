function getHeight() {
	var height = $('section.promo').height();
	console.log(height);
}
//var $ = {},
 // jQuery = $ = require('../bower_components/jquery/dist/jquery');

/* import jQuery from 'jquery' 

window.jQuery = jQuery
window.$ = jQuery */

//import $ from 'jquery';
//import jQuery from 'jquery'; // STEP ONE**********
//import whatInput from 'what-input';
//window.$ = $;
//window.jQuery = jQuery;     // STEP TWO**********
//import Foundation from 'foundation-sites';



$(function() {
	$('gallery a').on('click',function() {
		var image = $(this).find('img').attr('src');
		var imageSelected = image.split('thumbnail');
		// var fullPath = imageSelected[0] + 'fullsize' + imageSelected[1];
		//$('#galleryModal #imageContainer').attr('src', fullPath);
		console.log(imageSelected[0] + ' : ' + imageSelected[1]);
	});
});


$(document).foundation();
