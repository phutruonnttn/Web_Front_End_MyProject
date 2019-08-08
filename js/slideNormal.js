jQuery(document).ready(function ($) {
	var jssor_1_options = {
		$AutoPlay: 3,
		$SlideDuration: 1000,
		$SlideEasing: $Jease$.$OutQuint,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$
		}
	};
	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
	var MAX_WIDTH = 3000;
	function ScaleSlider() {
		var containerElement = jssor_1_slider.$Elmt.parentNode;
		var containerWidth = containerElement.clientWidth;

		if (containerWidth) {

			var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

			jssor_1_slider.$ScaleWidth(expectedWidth);
		}
		else {
			window.setTimeout(ScaleSlider, 50);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
});