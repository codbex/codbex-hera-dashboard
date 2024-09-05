const navigation = angular.module("launchpad", ["ngResource", "ideLayout", "ideUI"]);
navigation.controller("LaunchpadViewController", ["$scope", "messageHub", "$http", function ($scope, messageHub, $http) {
    $scope.currentViewId = 'dashboard';

    // $scope.extraExtensionPoints = ['codbex-orders-dialog-window'];

    $scope.switchView = function (id, event) {
        if (event) event.stopPropagation();
        $scope.currentViewId = id;
    };

    messageHub.onDidReceiveMessage('launchpad.switch.perspective', function (msg) {
        $scope.$apply(function () {
            $scope.switchView(msg.data.perspectiveId);
        });
    }, true)

    $scope.sections = [

        {
            "name": "Settings", "groups": [
                {
                    "name": "Company", "expanded": "configurationsExpanded", "icon": "wrench",
                    "items": [
                        { "name": "Companies", "view": "companies" }
                    ]
                }
            ]
        }
    ];

}]);