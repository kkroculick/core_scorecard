Application.$controller("DashboardPageController", ["$scope", "$timeout", "$route", "DialogService", function($scope, $timeout, $route, DialogService) {
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
        $scope.setDefaultWeights();
    };

    //set default weights - need to make this configurable
    $scope.setDefaultWeights = function() {

        //set default weights
        if (!$scope.Widgets.txtTotalNumberStrategicInitWght.datavalue) {
            $scope.Widgets.txtTotalNumberStrategicInitWght.datavalue = 5;
        }

        if (!$scope.Widgets.txtTotalNumberStrategicOppWghtdatavalue) {
            $scope.Widgets.txtTotalNumberStrategicOppWght.datavalue = 90;

        }
        if (!$scope.Widgets.txtTotalNumberStratImplWght.datavalue) {
            $scope.Widgets.txtTotalNumberStratImplWght.datavalue = 90;

        }
        if (!$scope.Widgets.txtComponentsTechDebtWght.datavalue) {
            $scope.Widgets.txtComponentsTechDebtWght.datavalue = 90;

        }
        if (!$scope.Widgets.txtAETAppInvestWght.datavalue) {
            $scope.Widgets.txtAETAppInvestWght.datavalue = 5;
        }

    };


    //invest formula
    $scope.getInvest = function() {
        if ($scope.Widgets.selectAETAppInvestment.datavalue === "Invest") {
            return 100;
        } else {
            return 0;
        }

    };

    $scope.clearControls = function() {
        // alert("clear")
        //set values for weight
        $scope.setDefaultWeights();


        //add default values and clear
        $scope.Widgets.txtTotalNumberStrategicInitScore.datavalue = 0;
        $scope.Widgets.txtTotalNumberStrategicInitBpTd.datavalue = 0;
        $scope.Widgets.txtTotalNumberStrategicOppScore.datavalue = 0;
        $scope.Widgets.txtTotalNumberStrategicOppBpTd.datavalue = 0;
        $scope.Widgets.txtTotalNumberStratImplScore.datavalue = 0;
        $scope.Widgets.txtComponentsTechDebtScore.datavalue = 0;
        $scope.Widgets.txtAETAppInvestScore.datavalue = 0;
        $scope.Widgets.txtSmartSpendWght.datavalue = 0;
        $scope.Widgets.txtSmartSpendScore.datavalue = 0;
        $scope.Widgets.txtSmartSpendTotal.datavalue = 0;

    };


    //check for mandatory values
    $scope.checkValues = function() {
        if (!$scope.Widgets.txtTotalNumberStrategicInit.datavalue) {
            return true;
        }
        if (!$scope.Widgets.txtTotalNumberStrategicOpps.datavalue) {
            return true;
        }
        if (!$scope.Widgets.txtTotalNumberStratImpl.datavalue) {
            return true;
        }
        if (!$scope.Widgets.txtComponentsTechDebt.datavalue) {
            return true;
        }
        if (!$scope.Widgets.selectAETAppInvestment.datavalue) {
            return true;
        }

        //add validation rules here

        //check for blueprints
        var platformBlueprints = parseFloat($scope.Widgets.txtNumberPlatformBlueprints.datavalue);
        var totalPlatforms = parseFloat($scope.Widgets.txtTotalPlatforms.datavalue);

        if (platformBlueprints > totalPlatforms) {
            alert("Number of Platforms with Blueprints cannot be greater than the Total Number of Platforms");
            //add dialog
            return;
        }

    };

    $scope.calculateScore = function() {
        try {

            //check
            if ($scope.checkValues() === true) {

                DialogService.showDialog('alertDialogWarning');
                $scope.highlightRequired("#98FB98");
                //
                return;
            }

            //clear old values
            var numStrategicInit = parseFloat($scope.Widgets.txtTotalNumberStrategicInit.datavalue);

            var numStrategicOpps = parseFloat($scope.Widgets.txtTotalNumberStrategicOpps.datavalue);
            var numImplementedSI = parseFloat($scope.Widgets.txtTotalNumberStratImpl.datavalue);
            var numCompTechDebt = parseFloat($scope.Widgets.txtComponentsTechDebt.datavalue);
            var appInvestmentStatus = parseFloat($scope.Widgets.selectAETAppInvestment.datavalue);
            var numPlatformBP = parseFloat($scope.Widgets.txtNumberPlatformBlueprints.datavalue);
            var numTotalPlatforms = parseFloat($scope.Widgets.txtTotalPlatforms.datavalue);
            var wghtStrategicInit = parseFloat($scope.Widgets.txtTotalNumberStrategicInitWght.datavalue);
            var wghtStrategicOpps = parseFloat($scope.Widgets.txtTotalNumberStrategicOppWght.datavalue);
            var wghtImplementedSI = parseFloat($scope.Widgets.txtTotalNumberStratImplWght.datavalue);
            var wghtCompTechDebt = parseFloat($scope.Widgets.txtComponentsTechDebtWght.datavalue);
            var wghtAppInvest = parseFloat($scope.Widgets.txtAETAppInvestWght.datavalue);

            //calculations
            var netStrategicInitBpTd = (numStrategicInit - numImplementedSI) + numCompTechDebt;
            var netStrategicOppsBpTd = numStrategicOpps + numCompTechDebt;
            var scoreStrategicInit = (((numStrategicInit - netStrategicInitBpTd) / numStrategicInit) * (numPlatformBP / numTotalPlatforms) * 100).toFixed(2);

            var scoreStrategicOpps = ((numImplementedSI / netStrategicOppsBpTd) * 100).toFixed(2);
            var scoreImplementedSI = ((numImplementedSI / netStrategicOppsBpTd) * 100).toFixed(2);
            var scoreCompTechDebt = ((numImplementedSI / netStrategicOppsBpTd) * 100).toFixed(2);
            var scoreAppInvest = $scope.getInvest();

            //set controls with calculated values
            $scope.Widgets.txtTotalNumberStrategicInitBpTd.datavalue = netStrategicInitBpTd;
            $scope.Widgets.txtTotalNumberStrategicInitWght.datavalue = wghtStrategicInit;
            $scope.Widgets.txtTotalNumberStrategicInitScore.datavalue = scoreStrategicInit;
            $scope.Widgets.txtTotalNumberStrategicOpps.datavalue = numStrategicOpps;
            $scope.Widgets.txtTotalNumberStrategicOppBpTd.datavalue = netStrategicOppsBpTd;

            $scope.Widgets.txtTotalNumberStrategicOppScore.datavalue = scoreStrategicOpps;
            $scope.Widgets.txtTotalNumberStrategicOppWght.datavalue = wghtStrategicOpps;
            $scope.Widgets.txtTotalNumberStratImpl.datavalue = numImplementedSI;
            $scope.Widgets.txtTotalNumberStratImplScore.datavalue = scoreImplementedSI;
            $scope.Widgets.txtTotalNumberStratImplWght.datavalue = wghtImplementedSI;
            $scope.Widgets.txtComponentsTechDebt.datavalue = numCompTechDebt;
            $scope.Widgets.txtComponentsTechDebtScore.datavalue = scoreCompTechDebt;
            $scope.Widgets.txtComponentsTechDebtWght.datavalue = wghtCompTechDebt;
            $scope.Widgets.txtAETAppInvestScore.datavalue = scoreAppInvest;
            $scope.Widgets.txtAETAppInvestWght.datavalue = wghtAppInvest;

            //set totals
            var totInit = parseFloat(scoreStrategicInit * (wghtStrategicInit / 100));
            var totOpps = parseFloat(scoreStrategicOpps * (wghtStrategicOpps / 100));
            var totApp = parseFloat(scoreAppInvest * (wghtAppInvest / 100));
            var totalSmartScore = totInit + totOpps + totApp;

            $scope.Widgets.txtSmartSpendScore.datavalue = (parseFloat(totalSmartScore)).toFixed(2);
            // console.log($scope.Widgets.txtSmartSpendScore.datavalue);

            var totalSmartWeight = wghtStrategicInit + wghtStrategicOpps + wghtAppInvest;
            $scope.Widgets.txtSmartSpendWght.datavalue = (parseFloat(totalSmartWeight)).toFixed(2);
            // console.log($scope.Widgets.txtSmartSpendWght.datavalue);

            var totalSQP = $scope.Widgets.txtImpactSQP.datavalue;
            var totalSmartSpendCost = totalSQP * (totalSmartScore / 100)


            $scope.Widgets.txtSmartSpendTotal.datavalue = (parseFloat(totalSmartSpendCost)).toFixed(2);


        } catch (e) {
            alert(e);
        }
    };



    $scope.gridScorecardRowclick = function($event, $data) {

        //console.log($data);

        $scope.Widgets.txtID.datavalue = $data.id;
        $scope.Widgets.txtProjectName.datavalue = $data.projectName;
        $scope.Widgets.txtProjectDesc.datavalue = $data.projectDescription;
        $scope.Widgets.selectPFA.datavalue = $data.portfolioArchitect;
        $scope.Widgets.selectLTA.datavalue = $data.leadTechnicalArchitect;
        $scope.Widgets.selectE2E.datavalue = $data.endToEnd;
        $scope.Widgets.taAIMImpacted.datavalue = $data.aimApplicationsImpacted;

        $scope.Widgets.txtTotalPlatforms.datavalue = $data.numberPlatforms;
        $scope.Widgets.txtCostProject.datavalue = $data.projectCost;
        $scope.Widgets.txtImpactSQP.datavalue = $data.sqpImpactCost;
        $scope.Widgets.selectCompanyPlatformImpact.datavalue = $data.companyPlatformsImpacted;
        $scope.Widgets.txtNumberPlatformBlueprints.datavalue = $data.numberPlatformsBlueprints;

        $scope.Widgets.txtPercentageImpact.datavalue = $data.percentagePortfolioArchitecureImpact;
        $scope.Widgets.selectGating.datavalue = $data.gatingScorecardSizing;

        $scope.Widgets.txtTotalNumberStrategicInit.datavalue = $data.numberStrategicInitiatives;
        $scope.Widgets.txtTotalNumberStrategicInitBpTd.datavalue = $data.numberStrategicInitiativesBpTd;
        $scope.Widgets.txtTotalNumberStrategicInitScore.datavalue = $data.numberStrategicInitiativesScore;
        $scope.Widgets.txtTotalNumberStrategicInitWght.datavalue = $data.numberStrategicInitiativesWeight;


        $scope.Widgets.txtTotalNumberStrategicOpps.datavalue = $data.numberStrategicOpportunities;
        $scope.Widgets.txtTotalNumberStrategicOppBpTd.datavalue = $data.numberStrategicOpportunitiesBpTd;
        $scope.Widgets.txtTotalNumberStrategicOppScore.datavalue = $data.numberStrategicOpportunitiesScore;
        $scope.Widgets.txtTotalNumberStrategicOppWght.datavalue = $data.numberStrategicOpportunitiesWeight;

        $scope.Widgets.txtTotalNumberStratImpl.datavalue = $data.numberImplementedInitiatives;
        $scope.Widgets.txtTotalNumberStratImplScore.datavalue = $data.numberImplementedInitiativesScore;
        $scope.Widgets.txtTotalNumberStratImplWght.datavalue = $data.numberImplementedInitiativesWeight;


        $scope.Widgets.txtComponentsTechDebt.datavalue = $data.numberComponentTechnicalDebt;
        $scope.Widgets.txtComponentsTechDebtScore.datavalue = $data.numberComponentTechnicalDebtScore;
        $scope.Widgets.txtComponentsTechDebtWght.datavalue = $data.numberComponentTechnicalDebtWeight;

        $scope.Widgets.selectAETAppInvestment.datavalue = $data.aetInvestmentStatus;
        $scope.Widgets.txtAETAppInvestScore.datavalue = $data.aetInvestmentStatusScore;
        $scope.Widgets.txtAETAppInvestWght.datavalue = $data.aetInvestmentStatusWeight;

        $scope.Widgets.txtComments.datavalue = $data.projectComments;

        $scope.Widgets.txtSmartSpendScore.datavalue = $data.smartSpendScore;
        $scope.Widgets.txtSmartSpendWght.datavalue = $data.smartSpendWeight;
        $scope.Widgets.txtSmartSpendTotal.datavalue = $data.totalSmartSpend;

    };


    $scope.btnCalculateClick = function($event, $isolateScope) {
        $scope.calculateScore();
    };


    $scope.btnSaveClick = function($event, $isolateScope) {
        try {
            if ($scope.checkValues() === true) {

                DialogService.showDialog('alertDialogWarning');
                $scope.highlightRequired("#98FB98");
                //
                return;
            } else {
                $scope.calculateScore();
            }

            //check for all values



            $scope.Variables.Core_scorecardScorecardData.setInput('id', $scope.scorecard.id);
            $scope.Variables.Core_scorecardScorecardData.setInput('projectName', $scope.scorecard.projectName);
            $scope.Variables.Core_scorecardScorecardData.setInput('projectDescription', $scope.scorecard.projectDesc);
            $scope.Variables.Core_scorecardScorecardData.setInput('portfolioArchitect', $scope.scorecard.pfa);
            $scope.Variables.Core_scorecardScorecardData.setInput('leadTechnicalArchitect', $scope.scorecard.lta);

            $scope.Variables.Core_scorecardScorecardData.setInput('endToEnd', $scope.scorecard.e2e);
            $scope.Variables.Core_scorecardScorecardData.setInput('aimApplicationsImpacted', $scope.scorecard.aimImpact);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberPlatforms', $scope.scorecard.numPlatforms);
            $scope.Variables.Core_scorecardScorecardData.setInput('projectCost', $scope.scorecard.projectCost);
            $scope.Variables.Core_scorecardScorecardData.setInput('sqpImpactCost', $scope.scorecard.impactSQP);
            $scope.Variables.Core_scorecardScorecardData.setInput('companyPlatformsImpacted', $scope.scorecard.companyPlatforms);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberPlatformsBlueprints', $scope.scorecard.numPlatformsBP);
            $scope.Variables.Core_scorecardScorecardData.setInput('percentagePortfolioArchitecureImpact', $scope.scorecard.archImpactPercent);
            $scope.Variables.Core_scorecardScorecardData.setInput('gatingScorecardSizing', $scope.scorecard.gateSizing);

            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicInitiatives', $scope.scorecard.numStrat);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicInitiativesBpTd', $scope.scorecard.stratBpTd);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicInitiativesScore', $scope.scorecard.stratScore);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicInitiativesWeight', $scope.scorecard.stratWeight);

            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicOpportunities', $scope.scorecard.opps);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicOpportunitiesBpTd', $scope.scorecard.oppsBpTd);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicOpportunitiesScore', $scope.scorecard.oppsScore);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberStrategicOpportunitiesWeight', $scope.scorecard.oppsWeight);

            $scope.Variables.Core_scorecardScorecardData.setInput('numberImplementedInitiatives', $scope.scorecard.impl);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberImplementedInitiativesScore', $scope.scorecard.implScore);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberImplementedInitiativesWeight', $scope.scorecard.implWeight);

            $scope.Variables.Core_scorecardScorecardData.setInput('numberComponentTechnicalDebt', $scope.scorecard.techDebt);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberComponentTechnicalDebtScore', $scope.scorecard.techDebtScore);
            $scope.Variables.Core_scorecardScorecardData.setInput('numberComponentTechnicalDebtWeight', $scope.scorecard.techDebtWeight);

            $scope.Variables.Core_scorecardScorecardData.setInput('aetInvestmentStatus', $scope.scorecard.aetInvest);
            $scope.Variables.Core_scorecardScorecardData.setInput('aetInvestmentStatusScore', $scope.scorecard.aetInvestScore);
            $scope.Variables.Core_scorecardScorecardData.setInput('aetInvestmentStatusWeight', $scope.scorecard.aetInvestWeight);

            $scope.Variables.Core_scorecardScorecardData.setInput('projectComments', $scope.scorecard.comments);

            $scope.Variables.Core_scorecardScorecardData.setInput('smartSpendScore', $scope.scorecard.smartSpendScore);
            $scope.Variables.Core_scorecardScorecardData.setInput('smartSpendWeight', $scope.scorecard.smartSpendWeight);
            $scope.Variables.Core_scorecardScorecardData.setInput('totalSmartSpend', $scope.scorecard.totalSmartSpend);

            //no id? create new record
            if (!$scope.scorecard.id) {

                $scope.Variables.Core_scorecardScorecardData.insertRecord();
            } else {
                $scope.Variables.Core_scorecardScorecardData.updateRecord();
            }

            DialogService.showDialog('alertDialogSuccess');
            //$scope.highlightRequired("#98FB98");
            //
            $scope.reloadRoute();

        } catch (e) {
            alert(e);
        }
    };







    //helper functions*******************************************************************************************************

    $scope.reloadRoute = function() {
        $route.reload();
    };

    $scope.highlightRequired = function(color) {

        var selectColor = !color ? "#5EFB6E" : color;
        //var selectColor = color;

        $scope.Widgets.txtProjectName.backgroundcolor = selectColor;
        $scope.Widgets.txtProjectDesc.backgroundcolor = selectColor;
        $scope.Widgets.selectPFA.backgroundcolor = selectColor;
        $scope.Widgets.selectLTA.backgroundcolor = selectColor;
        $scope.Widgets.selectE2E.backgroundcolor = selectColor;

        $scope.Widgets.taAIMImpacted.backgroundcolor = selectColor;
        $scope.Widgets.txtTotalPlatforms.backgroundcolor = selectColor;
        $scope.Widgets.txtCostProject.backgroundcolor = selectColor;
        $scope.Widgets.txtImpactSQP.backgroundcolor = selectColor;
        $scope.Widgets.selectCompanyPlatformImpact.backgroundcolor = selectColor;
        $scope.Widgets.txtNumberPlatformBlueprints.backgroundcolor = selectColor;
        $scope.Widgets.txtPercentageImpact.backgroundcolor = selectColor;
        $scope.Widgets.selectGating.backgroundcolor = selectColor;

        $scope.Widgets.txtTotalNumberStrategicInit.backgroundcolor = selectColor;
        $scope.Widgets.txtTotalNumberStrategicOpps.backgroundcolor = selectColor;
        $scope.Widgets.txtTotalNumberStratImpl.backgroundcolor = selectColor;
        $scope.Widgets.txtComponentsTechDebt.backgroundcolor = selectColor;

        $scope.Widgets.selectAETAppInvestment.backgroundcolor = selectColor;

    };


    $scope.toCamelCase = function(string) {

        return string.toLowerCase().replace(/(_|-)([a-z])/g, $scope.toUpperCase);
    };

    $scope.toUpperCase = function(string) {
        return string[1].toUpperCase();
    };


    $scope.tryParseJSON = function(jsonString) {
        try {
            var o = JSON.parse(jsonString);
            // Handle non-exception-throwing cases:
            // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
            // but... JSON.parse(null) returns 'null', and typeof null === "object", 
            // so we must check for that, too.
            if (o && typeof o === "object" && o !== null) {
                return o;
            }
        } catch (e) {}

        return false;
    };


    //controllers 

    $scope.btnCancelClick = function($event, $isolateScope) {
        $scope.reloadRoute();
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.reloadRoute();
    };


    $scope.btnNewClick = function($event, $isolateScope) {
        $scope.reloadRoute();
    };

}]);


Application.$controller("gridScorecardController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("alertDialogSuccessController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("alertDialogWarningController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);