'use strict';

p28AppServices.factory('GalleryFactory', ['$q', '$http', function ($q, $http) {
    return {
        getRandomFoto: function () {
            return $http.get('/p28/api/gallery/galleryrandom/1')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        },
      
        getGalleryCategList: function (p_child_work) {
            return $http.get('/p28/api/gallery/gallerycateglist/'+p_child_work)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
      },      

        getGalleryList: function (p_id_categ) {
            return $http.get('/p28/api/gallery/gallerylist/'+p_id_categ)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
      },
    
        getGalleryDetails: function (p_id_gal) {
            return $http.get('/p28/api/gallery/gallerydetails/'+p_id_gal)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
      },

   };
  }]);