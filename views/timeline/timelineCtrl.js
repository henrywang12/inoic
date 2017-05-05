/**
 * Created by xinliwei on 2016-06-07 0007.
 */
angular.module("myapp").controller('timelineCtrl', function ($scope) {
    $scope.posts = [
        {
            title: '淘宝靓衣01',
            date: '2016年6月4日',
            //image: 'images/placehold_500x500.png',
            image: 'images/TB1_400x400.jpg',
            like: 1,
            comment: 5
        },
        {
            title: '淘宝靓衣02',
            date: '2016年6月5日',
            image: 'images/TB2_400x400.jpg',
            like: 2,
            comment: 10
        },
        {
            title: '淘宝靓衣03',
            date: '2016年6月6日',
            image: 'images/TB3_400x400.jpg',
            like: 5,
            comment: 9
        }
    ];

    // 无限滚动
    $scope.loadMore = function () {
        // 声明一个对象，代表要加载的数据
        var dataFetchedFromServer = {
            title: '京东靓衣',
            date: '2016年6月6日',
            image: 'images/TB4_400x400.jpg',
            like: 1,
            comment: 5
        };

        // 模拟网络加载过程
        setTimeout(function () {
            // 将dataFetchedFromServer对象添加到posts model
            $scope.posts.push(dataFetchedFromServer);
            // 发送广播消息，加载过程完成了
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }, 3000);
    };

    // 下拉刷新
    $scope.doRefresh = function () {
        var data = [{
            title: '淘宝靓衣01',
            date: '2016年6月3日',
            image: 'images/TB1_400x400.jpg',
            like: 1,
            comment: 5
        }, {
            title: '淘宝靓衣02',
            date: '2016年6月4日',
            image: 'images/TB2_400x400.jpg',
            like: 2,
            comment: 10
        }, {
            title: '淘宝靓衣03',
            date: '2016年6月5日',
            image: 'images/TB3_400x400.jpg',
            like: 5,
            comment: 9
        }, {
            title: '淘宝靓衣04',
            date: '2016年6月6日',
            image: 'images/TB4_400x400.jpg',
            like: 5,
            comment: 9
        }];

        // 模拟网络加载过程
        setTimeout(function () {
            $scope.posts = data;
            // 通知框架，停止下拉刷新动画
            $scope.$broadcast('scroll.refreshComplete');
        }, 3000);
    };
});