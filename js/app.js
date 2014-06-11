var app = angular.module("phys2020", ["ui.bootstrap", 'ngRoute']);
app.constant('paths', [
    {path: '/contents', label: 'Contents', partial: 'partials/contents.html'},
    {path: '/week1', label: 'Week 1', partial: 'partials/week1.html'},
    {path: '/week2', label: 'Week 2', partial: 'partials/week2.html'},
    {path: '/week3', label: 'Week 3', partial: 'partials/week3.html'},
    {path: '/week4', label: 'Week 4', partial: 'partials/week4.html'},
    {path: '/exam2013', label: 'Exam 2013', partial: 'partials/exam2013.html'},
    {path: '/exam2012', label: 'Exam 2012', partial: 'partials/exam2012.html'},
    {path: '/exam2011', label: 'Exam 2011', partial: 'partials/exam2011.html'},
    {path: '/exam2010', label: 'Exam 2010', partial: 'partials/exam2010.html'}
]);
app.config(function($routeProvider, paths) {
    console.log(paths);
    for (var i = 0; i < paths.length; i++) {
        $routeProvider.when(paths[i].path, {templateUrl: paths[i].partial});
    }
    $routeProvider.otherwise({redirectTo: '/contents'});
});
function MainController($scope, $timeout, paths) {
    $scope.menu = paths;
    MathJax.Hub.Config({
        extensions: ["tex2jax.js"],
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            processEscapes: true
        },
        "HTML-CSS": { availableFonts: ["TeX"] }
    });
    $scope.isActive = function(v) {
        return v == window.location.hash.substring(1);
    };
    $scope.setActive = function(v) {
        $timeout(function() {
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        }, 500, false);
    };
    $scope.getActive = function() {
        for (var i = 0; i < paths.length; i++) {
            if ($scope.isActive(paths[i].path)) {
                return paths[i].label;
            }
        }
        return "Contents";
    };

    $timeout(function() {
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }, 500, false);
}
