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
            "name": "Business", "groups": [
                {
                    "name": "Company", "expanded": "configurationsExpanded", "icon": "building",
                    "items": [
                        { "name": "Companies", "view": "companies" },
                        { "name": "Organizations", "view": "organizations" },
                        { "name": "Teams", "view": "teams" }
                    ]
                }
            ]
        },
        {
            "name": "Personnel", "groups": [
                {
                    "name": "Employees", "expanded": "configurationsExpanded", "icon": "people-connected",
                    "items": [
                        { "name": "Employees", "view": "employees" },
                        { "name": "Documents", "view": "employee-contracts" },
                        { "name": "Jobs", "view": "jobs" }
                    ]
                }
            ]
        },
        {
            "name": "Payments", "groups": [
                {
                    "name": "Salaries", "expanded": "configurationsExpanded", "icon": "people-connected",
                    "items": [
                        { "name": "Salaries", "view": "salaries" },
                        { "name": "Payrolls", "view": "payrolls" }
                    ]
                }
            ]
        }
    ];

}]);