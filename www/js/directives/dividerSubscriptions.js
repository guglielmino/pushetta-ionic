angular.module('pushetta')
    .directive('dividerSubscriptions', function($parse) {
        return {
            priority: 1001,
            compile: compile
        };

        function compile(element, attr) {
            element.children().attr('ng-hide', 'subscription.isDivider');

            element.append(
                '<div class="item-divider ng-hide" ng-show="subscription.isDivider" ng-bind="subscription.divider"></div>'
            );
        }
    })