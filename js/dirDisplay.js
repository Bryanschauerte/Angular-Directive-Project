var app = angular.module('directivePractice').directive('dirDisplay', function(){
  return {
    restrict:'E',
    templateUrl: 'templates/dirDisplay.html',
    scope: {
      setUser: '&',
      user: '='
    },
    link: function(scope, element, attr){
      //  console.log(scope); console.log(element); console.log(attr);

       element.on('click',function(){
//it doesnt know to update the dom due to this
         scope.show = !scope.show;
         scope.setUser({user: scope.user})
         //apply updates the dom
         scope.$apply();
       })
    }
  };


});
