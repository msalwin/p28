'use strict';

p28AppControllers.controller('GalleryDetailsCtrl', ['$scope','$routeParams', 'GalleryFactory',
  function($scope,$routeParams,GalleryFactory) {
    $scope.showLoading = true;
    var loading = 0;
    var loadingFinish = 1;

    //lista galerii
    GalleryFactory.getGalleryDetails($routeParams.id_gal)
        .then(
            function (response) {
                $scope.galleryDetails = response.content.list;
                $scope.galleryName = response.content.name;
                loading = loading + 1;
                $scope.showLoading = !(loading==loadingFinish);
            },
            function (error) {
                console.error(error);
            }
        );
  }]);