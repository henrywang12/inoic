// angular.module是创建、注册和获取Angular模块的全局位置
// 'starter'是这个angular模块示例的名称;第二个参数是一个依赖模块数组
// 'starter.services'位于services.js
// 'starter.controllers'位于controllers.js
angular.module('myapp', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // 为tabs指令设置一个抽象state
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'views/tabs/tabs.html'
            })

            // 每个tab都有自己的导航历史栈(nav history stack)
            .state('tab.timeline', {
                url: '/timeline',
                views: {
                    'tab-timeline': {
                        templateUrl: 'views/timeline/tab-timeline.html',
                        controller: 'timelineCtrl'
                    }
                }
            })

            .state('tab.products', {
                url: '/products',
                views: {
                    'tab-products': {
                        templateUrl: 'views/products/tab-products.html',
                        controller: 'productsCtrl'
                    }
                }
            })
            .state('tab.desc', {
                url: '/desc',
                views: {
                    'tab-desc': {
                        templateUrl: 'views/desc/tab-desc.html',
                        controller: 'descCtrl'
                    }
                }
            });

        // 如果上面的states都不匹配，使用下面这个路由
        $urlRouterProvider.otherwise('/tab/timeline');

    });
