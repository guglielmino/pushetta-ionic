angular.module('pushetta')
    .directive('dividerSubscriptions', function($parse) {
        return {
            priority: 1001,
            compile: compile
        };

        function compile(element, attr) {
            var height = attr.itemHeight || '73';
            attr.$set('itemHeight', 'subscription.isDivider ? 37 : ' + height);

            element.children().attr('ng-hide', 'subscription.isDivider');
            element.prepend(
                '<div class="item item-divider ng-hide" ng-show="subscription.isDivider" ng-bind="subscription.divider"></div>'
            );
        }
    })