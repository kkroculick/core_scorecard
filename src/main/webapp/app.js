Application.run(function ($rootScope, $timeout) {
    "use strict";
    /* perform any action on the variables within this block(on-page-load) */
    $rootScope.onAppVariablesReady = function () {
        /*
         * variables can be accessed through '$rootScope.Variables' property here
         * e.g. $rootScope.Variables.staticVariable1.getData()
         */
    };



    $rootScope.Core_scorecardScorecardDataonSuccess = function(variable, data){
        
       /* $rootScope.Variables.Core_scorecardScorecardData.update({}, function() {
                $timeout(function() {
                    // console.log(data);
                        $rootScope.Widgets.gridScorecard.highlightRow(data);
                });
        });*/
        
    
    
    };

});