angular.module('pushetta')
    .directive('dividerSubscriptions', function($parse) {
        return {
            priority: 1001,
            compile: compile
        };

        function compile(element, attr) {
            attr.class = "";
            element.children().attr('ng-hide', 'subscription.isDivider');
            //element.children().remove();
            element.append(
                '<div class="item-divider ng-hide" ng-show="subscription.isDivider" ng-bind="subscription.divider"></div>'
            );
        }
    })