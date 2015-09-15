'use strict';

p28AppControllers.controller('GalleryCategCtrl', ['$scope', 'GalleryFactory',
  function($scope,GalleryFactory) {
    $scope.showLoading = true;
    var loading = 0;
    var loadingFinish = 7;
    //lista zdjęć do mozajki z prawej strony
    GalleryFactory.getRandomFoto()
        .then(
            function (response) {
                $scope.randomFotoList = response.content.list;
                loading = loading + 1;
                $scope.showLoading = !(loading==loadingFinish);
            },
            function (error) {
                console.error(error);
            }
        );

    //lista galerii
    GalleryFactory.getGalleryCategList(0)
        .then(
            function (response) {
                $scope.galleryCategList = response.content.list;
                loading = loading + 2;
                $scope.showLoading = !(loading==loadingFinish);
            },
            function (error) {
                console.error(error);
            }
        );

    //lista galerii prac dzieci
    GalleryFactory.getGalleryCategList(1)
        .then(
            function (response) {
                $scope.galleryChildWorkCategList = response.content.list;
                loading = loading + 4;
                $scope.showLoading = !(loading==loadingFinish);
            },
            function (error) {
                console.error(error);
            }
        );

  }]);