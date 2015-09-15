'use strict';

p28AppControllers.controller('GalleryListCtrl', ['$scope','$routeParams', 'GalleryFactory',
  function($scope,$routeParams,GalleryFactory) {

    $scope.showLoading = true;
    var loading = 0;
    var loadingFinish = 3;
    
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
    GalleryFactory.getGalleryList($routeParams.id_categ)
        .then(
            function (response) {
                $scope.galleryList = response.content.list;
                loading = loading + 2;
                $scope.showLoading = !(loading==loadingFinish);
            },
            function (error) {
                console.error(error);
            }
        );

  }]);
