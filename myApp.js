angular.module('myApp', ['ngMessages'])
    .controller('MyCtrl', function($scope) {


    $scope.data = [];

    $scope.submit = function() {
        console.log($scope.initForm);

      
       if  ($scope.initForm.maleName.$dirty &&
           $scope.initForm.dirtyTask.$dirty &&
           $scope.initForm.obnoxiousCelebrity.$dirty &&
           $scope.initForm.jobTitle.$dirty &&
           $scope.initForm.celebrity.$dirty &&
           $scope.initForm.hugeNumber.$dirty &&
           $scope.initForm.tediousTask.$dirty &&
           $scope.initForm.uselessSkill.$dirty &&
           $scope.initForm.adjective.$dirty)
        {
            $scope.allValsChange = true;
        }

        console.log($scope.allValsChange);

        if ($scope.initForm.$valid && $scope.allValsChange)
        {
           $scope.initView = false;
         
        }

    };


    $scope.initValues = function() {
        $scope.allValsChange = false;
        $scope.initView=true;
        $scope.data.maleName='Male name';
        $scope.data.dirtyTask='Dirty task';
        $scope.data.obnoxiousCelebrity='Obnoxious celebrity';
        $scope.data.jobTitle='Job title';
        $scope.data.celebrity='Celebrity';
        $scope.data.hugeNumber='Huge number';
        $scope.data.tediousTask='Tedious task';
        $scope.data.uselessSkill='Useless skill';
        $scope.data.adjective='Adjective';

    };

    $scope.initValues();

    $scope.reset = function() {
       $scope.initValues();
       $scope.initForm.$submitted = false;
       $scope.initForm.$setPristine();       

    };

});
