var app = angular.module("myApp", ["ngTagsInput"]);
app.controller("myCtrl", ["$scope", "$timeout", function($scope, $timeout) {
  $scope.hello = "Hello this is angular speaking!";

  $timeout(function() {
    $("select").select2();
  });
}]).controller("driverMappingCtrl", ["$scope", function($scope) {
  $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);


}]);
