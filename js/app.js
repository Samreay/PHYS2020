var app = angular.module("phys2020", ["ui.bootstrap"]);

function MainController($scope, $timeout) {
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
    $scope.active = 'Contents';
    $scope.menu = [
        {label: 'Contents', partial: 'partials/contents.html'},
        {label: 'Week 1', partial: 'partials/week1.html'},
        {label: 'Week 2', partial: 'partials/week2.html'},
        {label: 'Week 3', partial: 'partials/week3.html'},
        {label: 'Exam 2013', partial: 'partials/exam2013.html'}
    ];
    $scope.getActive = function() {
        for (var i = 0; i < $scope.menu.length; i++) {
            if ($scope.menu[i].label == $scope.active) {
                return $scope.menu[i].partial;
            }
        }
        return "";
    }
    $scope.isActive = function(v) {
        return v == $scope.active;
    }
    $scope.setActive = function(v) {
        $scope.active = v;
        $timeout(function() {
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        }, 500, false);
    }

    $timeout(function() {
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }, 500, false);
}
