"use strict";angular.module("DHubAgile",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/CRUD",{templateUrl:"views/CRUD.html",controller:"CrudCtrl",controllerAs:"Crud"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).otherwise({redirectTo:"/"})}]),angular.module("DHubAgile").controller("MainCtrl",function(){this.teamMembers=[{id:"1",name:"Nick Cannon"},{id:"2",name:"Simiso Zwane"},{id:"3",name:"Catey Sime"},{id:"4",name:"Bradley Gaviria"},{id:"5",name:"Solomon Ntshegi"},{id:"6",name:"Edward Jane"}],this.statuses=[{id:"1",name:"Backlog"},{id:"2",name:"To Do"},{id:"3",name:"In Progress"},{id:"4",name:"Review"},{id:"5",name:"Deploy"}],this.UserStories=[{id:"1",title:"Web Services",description:"Integrate webservices with the application",category:"SOAP",status:"Backlog",assignedTo:"Nick Cannon",type:"Big Change",estimate:""},{id:"2",title:"MongoDB",description:"Create a document for inserting users",category:"Database",status:"Backlog",assignedTo:"Simiso Zwane",type:"Small Enhancement",estimate:""},{id:"3",title:"User Interface",description:"User should be able to access the application from any device",category:"UX Design/Responsive",status:"In Progress",assignedTo:"Catey Sime",type:"Big Change",estimate:""},{id:"4",title:"Screen Logic",description:"Separate screen logic from common reusable logic",category:"Logic Layer",status:"To Do",assignedTo:"Bradley Gaviria",type:"Big Change",estimate:""},{id:"5",title:"Bed letter",description:"Print out bed letter",category:"Logic Layer",status:"Review",assignedTo:"Bradley Gaviria",type:"Big Change",estimate:""},{id:"6",title:"Error logs",description:"Separate screen logic from common reusable logic",category:"Logic Layer",status:"To Do",assignedTo:"Bradley Gaviria",type:"Big Change",estimate:""},{id:"7",title:"Home Page",description:"Single Homepage",category:"Logic Layer",status:"Review",assignedTo:"Bradley Gaviria",type:"Big Change",estimate:""},{id:"8",title:"Screen Logic 3",description:"Extract screen logic from common reusable logic",category:"Logic Layer 5",status:"Deploy",assignedTo:"Bradley Gaviria",type:"Big Change",estimate:""}],this.currentUserStory=null,this.editedUserStory={},this.setCurrentUserStory=function(a){this.currentUserStory=a,this.editedUserStory=angular.copy(this.currentUserStory)},this.update=function(){var a=["title","description","category","status","assignedTo","type"];a.forEach(function(a){this.currentUserStory[a]=this.editedUserStory[a]}),this.clearForm()},this.cancel=function(){this.clearForm()},this.clearForm=function(){this.currentUserStory=null,this.editedUserStory=[],this.userStoryDetailsForm.$setPristine(),this.userStoryDetailsForm.$setUntouched()},this.create=function(){var a=angular.copy(this.editedUserStory);a.id=Math.floor(9*Math.random())+1,this.UserStories.push(a),this.clearForm()},this["delete"]=function(a){this.UserStories.remove(function(b){return b.id===a})}}),angular.module("DHubAgile").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("DHubAgile").controller("CrudCtrl",function(){this.currentUserStory=null,this.editedUserStory={},this.setCurrentUserStory=function(a){this.currentUserStory=a,this.editedUserStory=angular.copy(this.currentUserStory)}}),angular.module("DHubAgile").controller("ProjectsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("DHubAgile").run(["$templateCache",function(a){a.put("views/CRUD.html",'<div class="container" id="cont" ng-controller="LoginCtrl"> <form name="loginForm" ng-submit="Login()"> <h3>Login</h3> <div class="login"> <label>username</label> <input type="text" ng-model="username" ng-required="username"> <label>password</label> <input type="text" ng-model="password" ng-required="password"> <input type="submit" id="submit" value="submit"> </div> </form> </div>'),a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="user-story-display-area"> <div class="user-story-display-wrapper"> <ul class="cols" ng-repeat="status in ::main.statuses"> <h3 class="colStatus">{{::status.name}}</h3> <hr> <li class="userstory" ng-repeat="userstory in main.UserStories | filter:{status:status.name}" ng-click="main.setCurrentUserStory(userstory)"> <div class="papercuts"> <article> <div> <button type="button" class="close" ng-click="main.delete(userstory.id)">x</button> <p class="title">{{userstory.title}}</p> </div> <div class="type-bar {{userstory.type}}"> </div> <div> <p>{{userstory.description}}</p> </div> </article> </div> </li> </ul> </div> </div> <div class="selectedStory"> <h3>User Story Details</h3> <form name="main.userStoryDetailsForm"> <div class="form-group"> <div class="controls"> </div> <div> <label ng-required="true">Title</label> <input type="text" ng-model="main.editedUserStory.title" ng-required="true" ng-minlength="2" ng-maxlength="50" class="form-control"> <label ng-required="true">Status</label> <select id="status" name="status" ng-required="true" ng-options="status as status.name for status in main.statuses track by status.id" class="form-control" ng-model="main.editedUserStory.status"> <label ng-required="true">Description</label> <textarea ng-model="main.editedUserStory.description" rows="3" cols="35" id="desc"></textarea> <label ng-required="true">Assign to</label> <select id="teamMemeber" name="teamMemeber" ng-model="main.editedUserStory.assignedTo" ng-required="true" ng-options="member as member.name for member in main.teamMembers track by member.id" class="form-control"> <label ng-required="true">Estimate</label> <input type="time" ng-model="main.editedUserStory.estimate" ng-rquired="true" placeholder="HH:mm:ss" min="08:00:00" max="17:00:00" style="width: 300px;height:50px"> <p> <div ng-if="main.currentUserStory"> <button class="btn btn-lg btn-success" ng-click="main.cancel()" style="float:left;width: 100px">Cancel</button> <button class="btn btn-lg btn-success" ng-click="main.upadate()" style="float:right;width: 200px">Update user story</button> </div> <div ng-if="!main.currentUserStory"> <button class="btn btn-lg btn-success" ng-disabled="!main.userStoryDetailsForm.$valid" ng-click="main.create()" style="width:100%"> Create user story </button> </div> </div> </div></form> </div>'),a.put("views/projects.html","<p>This is the projects view.</p>")}]);