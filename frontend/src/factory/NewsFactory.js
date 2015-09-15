'use strict';

p28AppServices.factory('NewsFactory', ['$q', '$http', function ($q, $http) {

    return {
        getNews: function () {
            return $http.get('/p28/api/news/news')
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
      }
    };
}]);