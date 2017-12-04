"use strict";

jQuery(document).ready(function() {
	 
	 //Slick
	 jQuery('#slider').slick();
	 $('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});