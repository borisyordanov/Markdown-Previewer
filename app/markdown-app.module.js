(function() {
	'use strict';
	angular
		.module('markdown-app', ['ngSanitize'])
		.directive("autoGrow", function() {
			return function(scope, element, attr) {
				var update = function() {
					element.css("height", "auto");
					element.css("height", element[0].scrollHeight + "px");
				};
				scope.$watch(attr.ngModel, function() {
					update();
				});
				attr.$set("ngTrim", "false");
			};
		});
})();
