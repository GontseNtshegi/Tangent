angular.module('tangentApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/CRUD.html',
    "<div class=\"container\" id=\"cont\" ng-controller=\"LoginCtrl\"> <form name=\"loginForm\" ng-submit=\"Login()\"> <h3>Login</h3> <div class=\"login\"> <label>username</label> <input type=\"text\" ng-model=\"username\" ng-required=\"username\"> <label>password</label> <input type=\"text\" ng-model=\"password\" ng-required=\"password\"> <input type=\"submit\" id=\"submit\" value=\"submit\"> </div> </form> </div>"
  );


  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"user-story-display-area\"> <div class=\"user-story-display-wrapper\"> <ul class=\"cols\" ng-repeat=\"status in ::main.statuses\"> <h3 class=\"colStatus\">{{::status.name}}</h3> <hr> <li class=\"userstory\" ng-repeat=\"userstory in main.UserStories | filter:{status:status.name}\" ng-click=\"main.setCurrentUserStory(userstory)\"> <div class=\"papercuts\"> <article> <div> <button type=\"button\" class=\"close\" ng-click=\"main.delete(userstory.id)\">x</button> <p class=\"title\">{{userstory.title}}</p> </div> <div class=\"type-bar {{userstory.type}}\"> </div> <div> <p>{{userstory.description}}</p> </div> </article> </div> </li> </ul> </div> </div> <div class=\"selectedStory\"> <h3>User Story Details</h3> <form name=\"main.userStoryDetailsForm\"> <div class=\"form-group\"> <div class=\"controls\"> </div> <div> <label ng-required=\"true\">Title</label> <input type=\"text\" ng-model=\"main.editedUserStory.title\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"50\" class=\"form-control\"> <label ng-required=\"true\">Status</label> <select id=\"status\" name=\"status\" ng-required=\"true\" ng-options=\"status as status.name for status in main.statuses track by status.id\" class=\"form-control\" ng-model=\"main.editedUserStory.status\"> <label ng-required=\"true\">Description</label> <textarea ng-model=\"main.editedUserStory.description\" rows=\"3\" cols=\"35\" id=\"desc\"></textarea> <label ng-required=\"true\">Assign to</label> <select id=\"teamMemeber\" name=\"teamMemeber\" ng-model=\"main.editedUserStory.assignedTo\" ng-required=\"true\" ng-options=\"member as member.name for member in main.teamMembers track by member.id\" class=\"form-control\"> <label ng-required=\"true\">Estimate</label> <input type=\"time\" ng-model=\"main.editedUserStory.estimate\" ng-rquired=\"true\" placeholder=\"HH:mm:ss\" min=\"08:00:00\" max=\"17:00:00\" style=\"width: 300px;height:50px\"> <p> <div ng-if=\"main.currentUserStory\"> <button class=\"btn btn-lg btn-success\" ng-click=\"main.cancel()\" style=\"float:left;width: 100px\">Cancel</button> <button class=\"btn btn-lg btn-success\" ng-click=\"main.upadate()\" style=\"float:right;width: 200px\">Update user story</button> </div> <div ng-if=\"!main.currentUserStory\"> <button class=\"btn btn-lg btn-success\" ng-disabled=\"!main.userStoryDetailsForm.$valid\" ng-click=\"main.create()\" style=\"width:100%\"> Create user story </button> </div> </div> </div></form> </div>"
  );


  $templateCache.put('views/projects.html',
    "<p>This is the projects view.</p>"
  );

}]);