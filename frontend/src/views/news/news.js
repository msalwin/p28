'use strict';

p28AppControllers.controller('NewsCtrl', ['$scope', 'NewsFactory',
    function($scope,NewsFactory) {
        $scope.showLoading = true;
        NewsFactory.getNews()
            .then(
                function (response) {
                    $scope.showLoading = false;
                    $scope.aktualnosci = response.content.list;
                },
                function (error) {
                    console.error(error);
                }
            );

    }
]);
  
