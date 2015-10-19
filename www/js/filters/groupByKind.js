angular.module('pushetta')
    .filter('groupByKind', function($parse) {
        var dividers = {};

        function resolveKind(kind) {
            switch (kind) {
                case 1:
                    return "SUBSCRIBED CHANNELS";
            }
            return "";
        }

        return function(input) {
            if (!input || !input.length) return;

            var output = [],
                previousKind,
                currentKind;

            for (var i = 0, ii = input.length; i < ii && (item = input[i]); i++) {
                currentKind = item.kind;
                if (!previousKind || currentKind != currentKind) {

                    var dividerId = currentKind;

                    if (!dividers[dividerId]) {
                        dividers[dividerId] = {
                            isDivider: true,
                            divider: resolveKind(currentKind)
                        };
                    }

                    output.push(dividers[dividerId]);
                }

                output.push(item);
                previousKind = currentKind;
            }

            return output;
        };
    })