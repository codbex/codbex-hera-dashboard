const navigation = angular.module("launchpad", ["ngResource", "ideLayout", "ideUI"]);
navigation.controller("LaunchpadViewController", ["$scope", "messageHub", "$http", function ($scope, messageHub, $http) {
    $scope.currentViewId = 'dashboard';

    $scope.extraExtensionPoints = ['app'];
    $scope.groups = [];

    $scope.switchView = function (id, event) {
        if (event) event.stopPropagation();
        $scope.currentViewId = id;
    };

    $scope.isGroupVisible = function (group) {
        const items = $scope.groupItems[group.label.toLowerCase()];
        return items.some(function (item) {
            return $scope.currentViewId === item.view;
        });
    };

    messageHub.onDidReceiveMessage('launchpad.switch.perspective', function (msg) {
        $scope.$apply(function () {
            $scope.switchView(msg.data.perspectiveId);
        });
    }, true)

    $scope.groupItems = [];
    $scope.groupItems["companies"] = [];
    $scope.groupItems["organizations"] = [];
    $scope.groupItems["teams"] = [];
    $scope.groupItems["employees"] = [];
    $scope.groupItems["employee-contracts"] = [];
    $scope.groupItems["jobs"] = [];
    $scope.groupItems["leave-requests"] = [];
    $scope.groupItems["salaries"] = [];
    $scope.groupItems["payrolls"] = [];
    $scope.groupItems["employee-payment"] = [];


    $scope.groups = [
        {
            "label": "Companies", "expanded": "configurationsExpanded", "icon": "building"
        },
        {
            "label": "Employees", "expanded": "employeesExpanded", "icon": "people-connected"
        },
        {
            "label": "Salaries", "expanded": "salariesExpanded", "icon": "people-connected"
        }
    ]
    $http.get("http://localhost:8080/services/ts/codbex-hera/api/NavigationExtension/NavigationService.ts")
        .then(function (response) {
            $scope.navigationList = response.data;

            $scope.navigationList.forEach(e => addNavigationItem(e));

            $scope.groupItems.forEach(e => e.sort((a, b) => a.orderNumber - b.orderNumber));

        })
        .catch(function (error) {
            console.error('Error fetching navigation list:', error);
            $scope.state.error = true;
            $scope.errorMessage = 'Failed to load navigation list';
        });

    function addNavigationItem(itemData) {
        if (!itemData || !itemData.label || !itemData.view || !itemData.group || !itemData.orderNumber || !itemData.link) {
            console.error('Invalid item data:', itemData);
            return;
        }

        const groupKey = itemData.group.toLowerCase();
        if (!$scope.groupItems[groupKey]) {
            console.error('Group key not found:', groupKey);
            return;
        }

        $scope.groupItems[itemData.group.toLowerCase()].push({
            "label": itemData.label,
            "view": itemData.view,
            "link": itemData.link
        });
    }
}]);