Application.$controller("PagePageController", ["$scope", function($scope) {
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
        $scope.setDefaults();
    };


    $scope.setDefaults = function() {

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

    $scope.getInvest = function() {
        if ($scope.Widgets.selectAETAppInvestment.datavalue === "Invest") {
            return 100;
        } else {
            return 0;
        }

    };

    $scope.clearControls = function() {
        // alert("clear")
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

    $scope.calculateScore = function() {
        try {
            //clear old values
            $scope.clearControls();

            //get data
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
            console.log($scope.Widgets.txtSmartSpendScore.datavalue);

            var totalSmartWeight = wghtStrategicInit + wghtStrategicOpps + wghtAppInvest;
            $scope.Widgets.txtSmartSpendWght.datavalue = (parseFloat(totalSmartWeight)).toFixed(2);
            console.log($scope.Widgets.txtSmartSpendWght.datavalue);

            var totalSQP = $scope.Widgets.txtImpactSQP.datavalue;
            var totalSmartSpendCost = totalSmartScore * totalSQP;
            $scope.Widgets.txtSmartSpendTotal.datavalue = (parseFloat(totalSmartSpendCost)).toFixed(2);


        } catch (e) {
            alert(e);
        }
    };

    $scope.btnSaveClick = function($event, $isolateScope) {
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('id, $scope.scorecard.id');
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('projectName', $scope.scorecard.projectName);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('projectDescription', $scope.scorecard.projectDesc);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('portfolioArchitect', $scope.scorecard.pfa);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('leadTechnicalArchitect', $scope.scorecard.lta);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('endToEnd', $scope.scorecard.e2e);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('aimApplicationsImpacted', $scope.scorecard.aimImpact);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberPlatforms', $scope.scorecard.numPlatforms);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('projectCost', $scope.scorecard.projectCost);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('sqpImpactCost', $scope.scorecard.impactSQP);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('companyPlatformsImpacted', $scope.scorecard.companyPlatforms);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberPlatformsBlueprints', $scope.scorecard.numPlatformsBP);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('percentagePortfolioArchitectureImpact', $scope.scorecard.archImpactPercent);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('gatingScorecardSizing', $scope.scorecard.gateSizing);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicInitiatives', $scope.scorecard.numStrat);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicInitiativesBpTd', $scope.scorecard.stratBpTD);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicInitiativesScore', $scope.scorecard.stratScore);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicInitiativesWeight', $scope.scorecard.stratWeight);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicOpportunities', $scope.scorecard.opps);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicOpportunitiesBpTd', $scope.scorecard.oppsBpTd);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicOpportunitiesScore', $scope.scorecard.oppsScore);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberStrategicOpportunitiesWeight', $scope.scorecard.oppsWeight);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberImplementedInitiatives', $scope.scorecard.impl);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberImplementedInitiativesScore', $scope.scorecard.implScore);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberImplementedInitiativesWeight', $scope.scorecard.implWeight);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberComponentTechnicalDebt', $scope.scorecard.techDebt);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberComponentTechnicalDebtScore', $scope.scorecard.techDebtScore);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('numberComponentTechnicalDebWeight', $scope.scorecard.techDebtWeight);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('aetInvestmentStatus', $scope.scorecard.aetInvest);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('aetInvestmentStatusScore', $scope.scorecard.aetInvestScore);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('aetInvestmentStatusWeight', $scope.scorecard.aetInvestWeight);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('projectComments', $scope.scorecard.comments);

        $scope.Variables.Core_scorecardScorecardWebformData.setInput('smartSpendScore', $scope.scorecard.smartSpendScore);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('smartSpendWeight', $scope.scorecard.smartSpendWeight);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('totalSmartSpend', $scope.scorecard.totalSmartSpend);
        try {
            if (!$scope.scorecard.id) {
                $scope.Variables.Core_scorecardScorecardWebformData.insertRecord();
            } else {
                $scope.Variables.Core_scorecardScorecardWebformData.updateRecord();
            }

        } catch (e) {
            alert(e);
        }

    };


    $scope.button4Click = function($event, $isolateScope) {
        /*$scope.Variables.Core_scorecardScorecardWebformData.setInput('id', '9')
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('projectName', $scope.scorecard.projectName);
        $scope.Variables.Core_scorecardScorecardWebformData.setInput('projectDescription', $scope.scorecard.projectDesc);
        $scope.Variables.Core_scorecardScorecardWebformData.updateRecord();*/

        $scope.calculateScore();


    };


    $scope.grid2Rowclick = function($event, $data) {
        //  $scope.Widgets.txtProjectName.datavalue = $

        console.log($data);
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
        $scope.Widgets.taCompanyPlatformImpact.datavalue = $data.companyPlatformsImpacted;
        $scope.Widgets.txtNumberPlatformBlueprints.datavalue = $data.numberPlatformsBlueprints;

        $scope.Widgets.txtPercentageImpact.datavalue = $data.percentagePortfolioArchitecureImpact;
        $scope.Widgets.selectGating.datavalue = $data.gatingScorecardSizing;

        $scope.Widgets.txtTotalNumberStrategicInit.datavalue = $data.numberStrategicInitiatives;
        $scope.Widgets.txtTotalNumberStrategicInitBpTd.datavalue = $data.numberStategicInitiativesBpTd;
        $scope.Widgets.txtTotalNumberStrategicInitScore.datavalue = $data.numberStategicInitiativesScore;
        $scope.Widgets.txtTotalNumberStrategicInitWght.datavalue = $data.numberStategicInitiativesWeight;


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

}]);




Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);