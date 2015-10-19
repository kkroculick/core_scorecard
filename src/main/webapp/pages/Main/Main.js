Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
    };

    /* perform any action with widgets inside this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */
    };

}]);










Application.$controller("gridScorecardController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.editCurrentRow = function() {
            $scope.Widgets.bntLookupPlatform.disabled = false;
            $scope.editRow();
        };


        $scope.addCurrentNewRow = function() {
            $scope.Widgets.bntLookupPlatform.disabled = false;
            $scope.addNewRow();
        };

    }
]);

Application.$controller("liveformScorecardController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.calculate = function() {

            var id = $scope.Widgets.id.datavalue;

            var projectName = $scope.Widgets.projectName.datavalue;
            var projectDescription = $scope.Widgets.projectDescription.datavalue;
            var portfolioArchitect = $scope.Widgets.portfolioArchitect.datavalue
            var leadTechnicalArchitect = $scope.Widgets.leadTechnicalArchitect.datavalue
            var endToEnd = $scope.Widgets.endToEnd.datavalue

            var aimApplicationsImpacted = $scope.Widgets.aimApplicationsImpacted.datavalue
            var numberPlatforms = $scope.Widgets.numberPlatforms.datavalue
            var projectCost = $scope.Widgets.projectCost.datavalue
            var sqpImpactCost = $scope.Widgets.sqpImpactCost.datavalue;
            var companyPlatformsImpacted = $scope.Widgets.companyPlatformsImpacted.datavalue;
            var numberPlatformsBlueprints = $scope.Widgets.numberPlatformsBlueprints.datavalue;
            var percentagePortfolioArchitecureImpact = $scope.Widgets.percentagePortfolioArchitecureImpact.datavalue;
            var gatingScorecardSizing = $scope.Widgets.gatingScorecardSizing.datavalue;

            var numberStrategicInitiatives = $scope.Widgets.numberStrategicInitiatives.datavalue;
            var numberStrategicInitiativesBpTd = $scope.Widgets.numberStrategicInitiativesBpTd.datavalue
            var numberStrategicInitiativesScore = $scope.Widgets.numberStrategicInitiativesScore.datavalue;
            //var numberStrategicInitiativesWeight = $scope.Widgets.numberStrategicInitiativesWeight.datavalue;
            var numberStrategicInitiativesWeight = 5;

            var numberStrategicOpportunities = $scope.Widgets.numberStrategicOpportunities.datavalue;
            var numberStrategicOpportunitiesBpTd = $scope.Widgets.numberStrategicOpportunitiesBpTd.datavalue;
            var numberStrategicOpportunitiesScore = $scope.Widgets.numberStrategicOpportunitiesScore.datavalue;
            //var numberStrategicOpportunitiesWeight = $scope.Widgets.numberStrategicOpportunitiesWeight.datavalue;
            var numberStrategicOpportunitiesWeight = 90;

            var numberImplementedInitiatives = $scope.Widgets.numberImplementedInitiatives.datavalue;
            var numberImplementedInitiativesScore = $scope.Widgets.numberImplementedInitiativesScore.datavalue;
            //var numberImplementedInitiativesWeight = $scope.Widgets.numberImplementedInitiativesWeight.datavalue;
            var numberImplementedInitiativesWeight = 90;

            var numberComponentTechnicalDebt = $scope.Widgets.numberComponentTechnicalDebt.datavalue;
            var numberComponentTechnicalDebtScore = $scope.Widgets.numberComponentTechnicalDebtScore.datavalue;
            //var numberComponentTechnicalDebtWeight = $scope.Widgets.numberComponentTechnicalDebtWeight.datavalue;
            var numberComponentTechnicalDebtWeight = 5;


            var aetInvestmentStatus = null;
            // = $scope.Widgets.aetInvestmentStatus.datavalue;
            if ($scope.Widgets.aetInvestmentStatus.datavalue === "Exit") {
                aetInvestmentStatus = 0;
            } else {
                aetInvestmentStatus = 100;
            }

            var aetInvestmentStatusScore = $scope.Widgets.aetInvestmentStatusScore.datavalue;
            //var aetInvestmentStatusWeight = $scope.Widgets.aetInvestmentStatusWeight.datavalue;
            var aetInvestmentStatusWeight = 5;
            var projectComments = $scope.Widgets.projectComments.datavalue;

            var numStrategicInit = Number(numberStrategicInitiatives);
            var numStrategicOpps = Number(numberStrategicOpportunities);
            var numImplementedSI = Number(numberImplementedInitiatives);
            var numCompTechDebt = Number(numberComponentTechnicalDebt);
            var appInvestmentStatus = Number(aetInvestmentStatus);
            var numPlatformBP = Number(numberPlatformsBlueprints);
            var numTotalPlatforms = Number(numberPlatforms);
            var wghtStrategicInit = Number(numberStrategicInitiativesWeight);
            var wghtStrategicOpps = Number(numberStrategicOpportunitiesWeight);
            var wghtImplementedSI = Number(numberImplementedInitiativesWeight);
            var wghtCompTechDebt = Number(numberComponentTechnicalDebtWeight);
            var wghtAppInvest = Number(aetInvestmentStatusWeight);

            var smartSpendScore = $scope.Widgets.smartSpendScore.datavalue;
            var smartSpendWeight = $scope.Widgets.smartSpendWeight.datavalue;
            var totalSmartSpend = $scope.Widgets.totalSmartSpend.datavalue;

            //calculations
            var netStrategicInitBpTd = (numStrategicInit - numImplementedSI) + numCompTechDebt;
            var netStrategicOppsBpTd = numStrategicOpps + numCompTechDebt;

            var scoreStrategicInit = (numStrategicInit - netStrategicInitBpTd) / numStrategicInit * (numPlatformBP / numTotalPlatforms) * 100;

            //this uses the same value as the scorec ard since the columns are missing a BpTd
            var scoreStrategicOpps = (numImplementedSI / netStrategicOppsBpTd) * 100;
            var scoreImplementedSI = (numImplementedSI / netStrategicOppsBpTd) * 100;
            var scoreCompTechDebt = (numImplementedSI / netStrategicOppsBpTd) * 100;


            var scoreAppInvest = aetInvestmentStatus;

            //set totals
            var totInit = scoreStrategicInit * (wghtStrategicInit / 100);

            var totOpps = scoreStrategicOpps * (wghtStrategicOpps / 100);
            var totApp = scoreAppInvest * (wghtAppInvest / 100);
            var totalSmartScore = totInit + totOpps + totApp;
            //console.log(totalSmartScore);

            var totalSmartWeight = wghtStrategicInit + wghtStrategicOpps + wghtAppInvest;
            //console.log(totalSmartWeight);

            var totalSQP = sqpImpactCost;
            var totalSmartSpendCost = totalSQP * (totalSmartScore / 100)



            //set fields

            $scope.Widgets.numberStrategicInitiativesBpTd.datavalue = netStrategicInitBpTd;
            $scope.Widgets.numberStrategicInitiativesScore.datavalue = scoreStrategicInit.toFixed(2);
            $scope.Widgets.numberStrategicOpportunitiesBpTd.datavalue = netStrategicOppsBpTd;
            $scope.Widgets.numberStrategicOpportunitiesScore.datavalue = scoreStrategicOpps.toFixed(2);
            $scope.Widgets.numberImplementedInitiativesScore.datavalue = scoreImplementedSI.toFixed(2);
            $scope.Widgets.numberComponentTechnicalDebtScore.datavalue = scoreCompTechDebt.toFixed(2);

            $scope.Widgets.smartSpendScore.datavalue = totalSmartScore.toFixed(2);
            $scope.Widgets.smartSpendWeight.datavalue = totalSmartWeight;
            $scope.Widgets.totalSmartSpend.datavalue = totalSmartSpendCost.toFixed(2);

            $scope.Widgets.createDt.datavalue = new Date().getTime();

        };





        $scope.cancelCurrentRow = function() {
            $scope.Widgets.bntLookupPlatform.disabled = true;
            $scope.cancel();
        };

        //form edit overrride

        $scope.editFormRow = function() {
            $scope.Widgets.bntLookupPlatform.disabled = false;
            $scope.edit();
        };

    }
]);





Application.$controller("dialogPlatformsController", ["$scope", "DialogService",
    function($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDlgPlatformSaveClick = function($event, $isolateScope) {

            var items = $scope.Widgets.gridPlatform.selecteditem;
            var formitems = [];

            if (items.platform) {
                $scope.Widgets.companyPlatformsImpacted.datavalue = items.platform;

            } else {
                console.log("here")
                for (var i = 0; i < items.length; i++) {
                    if (i === 0) {
                        formitems.push(items[i].platform);

                    } else {
                        formitems.push("\n" + items[i].platform);
                    }
                }

                $scope.Widgets.companyPlatformsImpacted.datavalue = formitems.toString();
            }

            DialogService.close('dialogPlatforms');

        };





    }
]);

Application.$controller("gridPlatformController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialog2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);