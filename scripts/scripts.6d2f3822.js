"use strict";function init(){window.initGapi()}angular.module("vibeKillerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/happy",{templateUrl:"views/happy.html",controller:"HappyCtrl",controllerAs:"happy"}).when("/sad",{templateUrl:"views/sad.html",controller:"SadCtrl",controllerAs:"sad"}).otherwise({redirectTo:"/"})}]),angular.module("vibeKillerApp").controller("MainCtrl",["$scope","happy",function(a,b){a.happy=b.query()}]),angular.module("vibeKillerApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("vibeKillerApp").controller("HappyCtrl",["$scope","happy","$sce",function(a,b,c){a.happyvids=b.query(),a.happyvids.$promise.then(function(b){var d=Math.floor(Math.random()*b.items.length),e='<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/'+b.items[d].snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe>';a.currentVideo=c.trustAsHtml(e),console.log("set current video to: "+a.currentVideo),console.log(b.items[d].snippet.resourceId.videoId),copyRandomIndex=d})}]),angular.module("vibeKillerApp").controller("SadCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("vibeKillerApp").factory("happy",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLq2uamLnrhl4x86RGi8dY1cCN-hUuvxpM&key=AIzaSyDOKHMiU66J5zLNcRT-mVH3THUCl009tLI",{},{query:{method:"GET"}})}]),angular.module("vibeKillerApp").factory("sad",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("vibeKillerApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/happy.html",'<div ng-bind-html="currentVideo"></div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Pardon,</h1> <p class="lead"> <img src="images/payday.d61f4914.jpg" alt="I\'m Yeoman" height="50%" width="50%"><br> What vibe are you on? </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="container"> <!-- Example row of columns --> <div class="row"> <div class="col-md-6 vibes"> <h2>Happy</h2> <p></p><p><a ng-href="#!/happy" class="btn btn-lg btn-primary"><img src="images/happyclowny.bbed9c45.png" height="225px" width="325px"> </a></p> <p><a class="btn btn-default view-details" role="button">View details &raquo;</a></p> </div> <div class="col-md-6 vibes"> <h2>Sad</h2> <p><a ng-href="#!/sad" class="btn btn-lg btn-primary"><img src="images/sadclowny.fa11db27.png" height="225px" width="325px"> </a></p> <p><a class="btn btn-default view-details" role="button">View details &raquo;</a></p> </div> </div></div>'),a.put("views/sad.html","<p>This is the sad view.</p>")}]);