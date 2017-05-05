/**
 * Created by xinliwei on 2016-06-07 0007.
 */
angular.module('myapp').controller("descCtrl",function($scope){
    $scope.userProfile = {
        username: '@火星时代',
        avatar: 'images/ionic.png',
        imageCount: 6
    };

    $scope.images = [
        {url: 'images/TB1_100x100.jpg'},
        {url: 'images/TB2_100x100.jpg'},
        {url: 'images/TB3_100x100.jpg'},
        {url: 'images/TB4_100x100.jpg'},
        {url: 'images/TB1_100x100.jpg'},
        {url: 'images/TB2_100x100.jpg'}
    ]
});